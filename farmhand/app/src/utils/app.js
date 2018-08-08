import firebase from 'firebase';
import { fromHeader, fromMatch } from '../actions'
import { defaultMarketArray, defaultStartingArray, listenForMatches, listenForMatchUpdates } from './'


const config = {
    apiKey: "AIzaSyBreOUIUqC9gFC2pX5VrcsvTaHqVwpTJWI",
    authDomain: "farm-hand-dbc33.firebaseapp.com",
    databaseURL: "https://farm-hand-dbc33.firebaseio.com",
    projectId: "farm-hand-dbc33",
    storageBucket: "",
    messagingSenderId: "939178338794"
  };
  firebase.initializeApp(config);

export const database= firebase.database();



function addPlayerToMatch(path, color, deck, hand, user) {
  console.log("player to add to match: "+JSON.stringify(user));
  const counters= {
    plenty: 0,
    coin: 0,
    plant: 0,
    harvest: 0,
    scrap: 0,
    marketScrap: 0
  };
  insertObject(path+'/counters', counters);
  insertObject(path+'/color', color);
  insertObject(path+'/user', user);
  for(var i= 0; i < deck.length; i++) {
    insertObject(path+'/deck/'+deck[i], deck[i], i);
  }
  for(var i= 0; i < hand.length; i++) {
    insertObject(path+'/hand/'+hand[i], hand[i], i);
  }
}

export function buyMarketCard(discard, id, market, matchPath, userPlayerNumber) {
  discard= discard === null ? [] : discard;
  console.log("did I get it all? "+discard+id+market);
  market.splice(market.indexOf(id), 1);
  let updates= {};
  updates[ matchPath+'/market/'+id]= null;
  database.ref().update(updates);
  insertObject( matchPath+'/'+userPlayerNumber+'/discard/'+id, id);

}

export function checkLogin(dispatch, un, pw) {
  if(un.length < 2) {
    dispatch(fromHeader.setErrorMessage("You must submit a username of at least 2 characters"));
  }
  else if(pw.length < 4) {
    dispatch(fromHeader.setErrorMessage("You must submit a password of at least 4 characers"));
  }
  else {
    database.ref('/users/' + un + '/password').on('value', snapshot => {
      console.log("db pw: "+snapshot.val());
      const password= snapshot.val();
      if(password === pw) {
        loginUser(un, dispatch);
      }
      else if(password === null) {
        dispatch(fromHeader.setErrorMessage("Incorrect Username"));
      }
      else {
        dispatch(fromHeader.setErrorMessage("Incorrect Password"));
      }
    });
  }
}

export function checkRegister(dispatch, un, pw, cp) {
  if(un.length < 2) {
    dispatch(fromHeader.setRegisterErrorMessage("You must submit a username of at least 2 characters"));
  }
  else if(pw.length < 4) {
    dispatch(fromHeader.setRegisterErrorMessage("You must submit a password of at least 4 characers"));
  }
  else if(cp !== pw) {
    dispatch(fromHeader.setRegisterErrorMessage("The confirm password does not match the password!"));
  }
  else {
    database.ref('/users/' + un).on('value', snapshot => {
      console.log("db un: "+snapshot.val());
      const username= snapshot.val();
      if(username !== null) {
        dispatch(fromHeader.setRegisterErrorMessage("Username Already Taken"));
      }
      else {
        registerUser(un, pw, dispatch);
        dispatch(fromHeader.registerUser(un));
      }
    });
  }
}

export function createMatch(user) {
  const keyQuery= database.ref('/matches/').orderByKey().limitToLast(1);
  keyQuery.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        const path= 'matches/'+(parseInt(childSnapshot.key)+1);
        insertObject(path+'/status', "pending");
        const today = new Date();
        const todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        insertObject(path+'/date', todayDate);
        insertObject(path+'/currentPlayer', "playerOne");
        const market= shuffleArray(defaultMarketArray);
        for(var i= 0; i < market.length; i++) {
          insertObject(path+'/market/'+market[i], market[i], i);
        }
        let pOneDeck= shuffleArray(defaultStartingArray.slice());
        let hand= [pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop()];
        const color= "lightcyan";
        addPlayerToMatch(path+'/playerOne', color, pOneDeck, hand, user);
      });
    });
}

export function deleteCookie(cname) {
  document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

function displayError(message) {
  console.log("ERROR ERROR - "+message);
}

export function endTurn(currentPlayer, deck, discard, hand, matchPath, numberOfPlayers, playerNumber) {
  deck= (deck === null ? [] : deck);
  discard= (discard === null ? [] : discard);
  hand= (hand === null ? [] : hand);
//updates player's hand, deck and discard
  console.log("ending "+playerNumber+"'s turn with deck "+JSON.stringify(deck)+'\n'+" and discard "+JSON.stringify(discard)+'\n'+" and hand "+JSON.stringify(hand));
  let newDiscard= discard.concat(hand);
  let newHand= [];
  if(deck.length < 5) {
    while(deck.length > 0) {
      newHand.push(deck.pop());
    }
    deck= shuffleArray(newDiscard);
    newDiscard= [];
    while(newHand.length < 5) {
      newHand.push(deck.pop());
    }
  }
  else {
    newHand= [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];
  }
  updateMatchPlayerArray(matchPath, playerNumber, "deck", deck);
  updateMatchPlayerArray(matchPath, playerNumber, "discard", newDiscard);
  updateMatchPlayerArray(matchPath, playerNumber, "hand", newHand);

//updates currentPlayer for next player
  if(currentPlayer==="playerOne") {
    currentPlayer= "playerTwo";
  }
  else {
    if(numberOfPlayers===2) {
      currentPlayer= "playerOne";
    }
    else {
      currentPlayer= currentPlayer==="playerTwo" ? "playerThree" : "playerOne";
    }
  }
  let updates= {};
  updates[matchPath+'/currentPlayer']= currentPlayer;
  database.ref().update(updates);
}

export function getCardInfo(id) {
  console.log("gonna get the info for card "+id);
}

export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            console.log("calling get cookie, got: "+c.substring(name.length, c.length));
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function getMatchPlayers(dispatch, matchPath, user) {
  database.ref(matchPath+'/').once('value')
    .then(function(snapshot) {
      const pOne= snapshot.child('playerOne/').child('/user').val();
      const cOne= snapshot.child('playerOne/').child('/color').val();
      const pTwo= snapshot.child('playerTwo/').child('/user').val();
      const cTwo= snapshot.child('playerTwo/').child('/color').val();
      const pThree= snapshot.child('playerThree/').child('/user').val();
      const cThree= snapshot.child('playerThree/').child('/color').val();

      const matchPlayers= [pOne, pTwo, pThree].filter(function(n){ return n !== null });
      const matchColors= [cOne, cTwo, cThree];
      console.log("match players: "+matchPlayers);
      setMatchPlayerNumbers(dispatch, matchPath, matchColors, matchPlayers, user);
      dispatch(fromMatch.saveMatchPlayers(matchPlayers));
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function insertObject(dbPath, obj, priority) {
  priority= priority===undefined?0:priority;
  console.log("PRIORITY FOR "+obj+" IS: "+priority);
  database.ref(dbPath).setWithPriority(obj, priority, function(error) {
    if(error) {
      console.log("object submission error");
    }
    else {
      console.log("object inserted");
    }
  });
}

export function joinMatch(key, playerList, user) {
  const players= playerList.split(", ");
  const playerNumber= players.length > 1 ? "playerThree" : "playerTwo";
  const color= playerNumber === "playerTwo" ? "lightgoldenrodyellow": "lightpink";
  let deck= shuffleArray(defaultStartingArray.slice());
  const hand= [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];
  addPlayerToMatch('/matches/'+key+'/'+playerNumber, color, deck, hand, user);
}

function loginUser(un, dispatch) {
  setCookie("user", un);
  listenForMatches(dispatch, un);
  dispatch(fromHeader.logIn(un));
}

export function matchMount(dispatch) {
  console.log("@@@@@@@@@@@@@@@@@@");
  const matchId= getCookie("match");
  if(matchId===null) {
    displayError("Go back to the lobby and select a match!");
  }
  else {
    const user= getCookie("user");
    if(user===null) {
      displayError("Go back to the home page and sign in!");
    }
    else {
      const matchPath= '/matches/'+matchId;
      dispatch(fromMatch.saveMatchPath(matchPath));
      getMatchPlayers(dispatch, matchPath, user);  
    }
  }
}

export function openRules() {
  window.open("https://docs.google.com/document/d/1L2AIySPlRm0gVUJXQpAMcdTZ-I4zT8VYX3ef21cu3mE/edit?usp=sharing", "_blank", "location=yes");
}

export function playCard(id, matchPath, playerNumber, hand, counters) {
  console.log(playerNumber+" played card "+id);
}

export function playMatch(key, dispatch) {
  setCookie("match", key);
  dispatch(fromMatch.saveMatchPath('/matches/'+key));
}

function registerUser(username, password, dispatch) {
  database.ref('users/'+username+'/').set({
    password: password,
  }, function(error) {
    if(error) {
      console.log("user submission error");
    }
    else {
      loginUser(username, dispatch);
      console.log("user should be registered");
    }
  });
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";expires=Thu, 21 July 2050 01:00:00 UTC;";
    console.log(cname+" cookie set as "+cvalue);
}

function setMatchPlayerNumbers(dispatch, matchPath, colors, players, user) {
  console.log("setting user ^^^^^^ "+players.length+players.toString());
  const threePlayers = players.length === 3;
  let userColor= colors[0];
  let userPlayerNumber= "playerOne";
  if(players[0] === user) {
    dispatch(fromMatch.saveNextPlayer(colors[1], players[1], "playerTwo"));
    if(threePlayers) {
      dispatch(fromMatch.savePreviousPlayer(colors[2], players[2], "playerThree"));
    }
  }
  else if(players[1] === user) {
    userPlayerNumber= 'playerTwo';
    userColor= colors[1];
    if(threePlayers) {
       dispatch(fromMatch.saveNextPlayer(colors[2], players[2], "playerThree"));
       dispatch(fromMatch.savePreviousPlayer(colors[0], players[0], "playerOne"));
    }
    else {
      dispatch(fromMatch.saveNextPlayer(colors[0], players[0], "playerOne"));
    }
  }
  else if(players[2] === user) {
    userPlayerNumber= "playerThree";
    userColor= colors[2];
     dispatch(fromMatch.saveNextPlayer(colors[0], players[0], "playerOne"));
     dispatch(fromMatch.savePreviousPlayer(colors[1], players[1], "playerTwo"));
  }
  else {
    displayError("You are not a player in this match!");
    return "";
  }
  console.log("USER PLAYER N SET TO: "+userPlayerNumber);
  dispatch(fromMatch.saveUserPlayerNumber(userPlayerNumber));
  dispatch(fromMatch.saveUserColor(userColor));
  listenForMatchUpdates(dispatch, matchPath, userPlayerNumber);
}

function shuffleArray(initialArray) {
  let randomIndex=0;
  let finalArray= [];
  while(initialArray.length > 0) {
    randomIndex= getRandomInt(initialArray.length);
    finalArray.push(initialArray[randomIndex]);
    // this is going to move the value of the final entry into the selected entry, so I can pop the final entry. If the selected one is the final one, no need to swap.
    if(randomIndex !== initialArray.length-1) {
      initialArray[randomIndex]= initialArray[initialArray.length-1];
    }
    initialArray.pop();
  }
  return finalArray;
}

export function startMatch(key) {
  console.log("starting match "+key);
  let updates= {};
  updates['matches/'+key+'/status']= "in progress";
  database.ref().update(updates);
}

function updateMatchPlayerArray(matchPath, player, arrayType, array) {
  let updates= {};
  updates[matchPath+'/'+player+'/'+arrayType]= array;
  database.ref().update(updates);
}
