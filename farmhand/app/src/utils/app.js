import firebase from 'firebase';
import { fromHeader, fromLobby, fromMatch } from '../actions'
import { defaultMarketArray, defaultStartingArray } from './'


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

var user= getCookie('user');
let matchId= getCookie("match");
let userPlayerNumber= "";



function addPlayerToMatch(path, deck, hand) {
  insertObject(path+'/user', user);
  for(var i= 0; i < deck.length; i++) {
    insertObject(path+'/deck/'+deck[i], deck[i], i);
  }
  for(var i= 0; i < hand.length; i++) {
    insertObject(path+'/hand/'+hand[i], hand[i], i);
  }
}

export function buyMarketCard(discard, id, market) {
  discard= discard === null ? [] : discard;
  console.log("did I get it all? "+discard+id+market);
  market.splice(market.indexOf(id), 1);
  var updates= {};
  updates['/matches/'+matchId+'/market/'+id]= null;
  database.ref().update(updates);
  insertObject('/matches/'+matchId+'/'+userPlayerNumber+'/discard/'+id, id);

}

export function checkLogin(dispatch, un, pw) {
  if(un.length < 2) {
    return dispatch(fromHeader.setErrorMessage("You must submit a username of at least 2 characters"));
  }
  else if(pw.length < 4) {
    return dispatch(fromHeader.setErrorMessage("You must submit a password of at least 4 characers"));
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

export function createMatch() {
  const keyQuery= database.ref('/matches/').orderByKey().limitToLast(1);
  keyQuery.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        const path= 'matches/'+(parseInt(childSnapshot.key)+1);
        insertObject(path+'/status', "pending");
        const today = new Date();
        const todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        insertObject(path+'/date', todayDate);
        const market= shuffleArray(defaultMarketArray);
        for(var i= 0; i < market.length; i++) {
          insertObject(path+'/market/'+market[i], market[i], i);
        }
        let pOneDeck= shuffleArray(defaultStartingArray.slice());
        let hand= [pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop()];
        addPlayerToMatch(path+'/playerOne', pOneDeck, hand);
      });
    });
}

export function deleteCookie(cname) {
  document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

// export function drawFromDeck(deck, discard) {
//   if(deck.length > 0) {
//     return deck.pop();
//   }
//   else {
//     console.log("discard is: "+JSON.stringify(discard));
//     const shuffledDiscard= shuffleArray(discard);
//     deck= ...shuffledDiscard;
//     return deck.pop();
//   }
// }

function displayError(message) {
  console.log("ERROR ERROR - "+message);
}

export function endTurn(playerNumber, dispatch, deck, discard, hand) {
  deck= (deck === null ? [] : deck);
  discard= (discard === null ? [] : discard);
  hand= (hand === null ? [] : hand);

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

  updateMatchPlayerArray(playerNumber, "deck", deck);
  updateMatchPlayerArray(playerNumber, "discard", newDiscard);
  updateMatchPlayerArray(playerNumber, "hand", newHand);
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

export function getMatchPlayers(dispatch) {
  database.ref('matches/'+matchId+'/').once('value')
    .then(function(snapshot) {
      const pOne= snapshot.child('playerOne/').child('/user').val();
      const pTwo= snapshot.child('playerTwo/').child('/user').val();
      const pThree= snapshot.child('playerThree/').child('/user').val();

      const matchPlayers= [pOne, pTwo, pThree].filter(function(n){ return n !== null });
      console.log("match players: "+matchPlayers);
      setMatchPlayerNumbers(dispatch, matchPlayers);
      dispatch(fromMatch.saveMatchPlayers(matchPlayers));
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function joinMatch(key, playerList) {
  const players= playerList.split(", ");
  let playerNumber= players.length > 1 ? "playerThree" : "playerTwo";
  let deck= shuffleArray(defaultStartingArray.slice());
  const hand= [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];
  addPlayerToMatch('/matches/'+key+'/'+playerNumber, deck, hand);
}

export function insertObject(dbPath, obj, priority) {
  priority= priority===undefined?0:priority;
  console.log("PRIORITY IS: "+priority);
  database.ref(dbPath).setWithPriority(obj, priority, function(error) {
    if(error) {
      console.log("object submission error");
    }
    else {
      console.log("object inserted");
    }
  });
}


export function listenForMatches(dispatch) {
  database.ref('matches/').on('value', snapshot => {
    const matchList= [];
    snapshot.forEach(function(childSnapshot) {
      const pOne= childSnapshot.child('/playerOne').child('/user').val();
      const pTwo= childSnapshot.child('/playerTwo').child('/user').val();
      const pThree= childSnapshot.child('/playerThree').child('/user').val();
    console.log("retrieving matches, with players: "+pOne+", "+pTwo+", and "+pThree);
      const joinedPlayers= [pOne, pTwo, pThree].filter(function(n){ return n !== null }).join(', ');
      const inMatch= (user === pOne || user === pTwo || user === pThree);
      const matchFull= (pOne!==null && pTwo!==null && pThree!==null);
      const status= childSnapshot.child('/status').val();
      var label= "";
      if(inMatch) {
        if(status === "pending") {
          if(pTwo) {
            label= "Start Match";
          }
        }
        else if(status === "in progress") {
          label="Play Match";
        }
      }
      else {
        if(!matchFull) {
          label= "Join Match";
        }
      }
      matchList.push({playerList: joinedPlayers, actionLabel: label, key: childSnapshot.key});
    });
    matchList.sort(function(a, b) {a.key - b.key});
    matchList.reverse();
    dispatch(fromLobby.save(matchList));
  });
}

export function listenForMatchMarketArray(dispatch) {
  console.log("going to get match market array for match "+matchId);
  database.ref('/matches/'+matchId+'/market/').on("value", snapshot => {
    let market= [];
    snapshot.forEach(function(childSnapshot) {
      market.push(childSnapshot.val());
    });
    dispatch(fromMatch.saveMarketArray(market));
  } );
}

export function listenForMatchUpdates(dispatch) {
  listenForMatchMarketArray(dispatch);
  listenForPlayerOneUpdates(dispatch);
  listenForPlayerTwoUpdates(dispatch);
  listenForPlayerThreeUpdates(dispatch);
}


export function listenForPlayerOneUpdates(dispatch) {
  database.ref('/matches/'+matchId+'/playerOne/deck/').on("value", snapshot => {
    let playerOneDeck= [];
    snapshot.forEach(function(childSnapshot) {
      console.log("Child of p1 deck: "+childSnapshot.val());
      playerOneDeck.push(childSnapshot.val());
    });
    console.log("full retrieved deck: "+playerOneDeck.toString());
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveUserDeck(playerOneDeck));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerDeck(playerOneDeck));
    }
    else {
      dispatch(fromMatch.saveNextPlayerDeck(playerOneDeck));
    }
  });
  database.ref('/matches/'+matchId+'/playerOne/discard/').on("value", snapshot => {
    let playerOneDiscard= [];
    snapshot.forEach(function(childSnapshot) {
      playerOneDiscard.push(childSnapshot.val());
    });
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveUserDiscard(playerOneDiscard));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerDiscard(playerOneDiscard));
    }
    else {
      dispatch(fromMatch.saveNextPlayerDiscard(playerOneDiscard));
    }
  });
  database.ref('/matches/'+matchId+'/playerOne/hand/').on("value", snapshot => {
    let playerOneHand= [];
    snapshot.forEach(function(childSnapshot) {
      playerOneHand.push(childSnapshot.val());
    });
    console.log("Player One hand is: "+playerOneHand.toString());
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveUserHand(playerOneHand));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerHand(playerOneHand));
    }
    else {
      dispatch(fromMatch.saveNextPlayerHand(playerOneHand));
    }
  });
}

export function listenForPlayerTwoUpdates(dispatch) {
  database.ref('/matches/'+matchId+'/playerTwo/deck/').on("value", snapshot => {
    let playerTwoDeck= [];
    snapshot.forEach(function(childSnapshot) {
      playerTwoDeck.push(childSnapshot.val());
    });
    console.log("Player TWO hand is: "+playerTwoDeck.toString());
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.savePreviousPlayerDeck(playerTwoDeck));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.saveUserDeck(playerTwoDeck));
    }
    else {
      dispatch(fromMatch.savePreviousPlayerDeck(playerTwoDeck));
    }
  });
  database.ref('/matches/'+matchId+'/playerTwo/discard/').on("value", snapshot => {
    let playerTwoDiscard= [];
    snapshot.forEach(function(childSnapshot) {
      playerTwoDiscard.push(childSnapshot.val());
    });
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.savePreviousPlayerDiscard(playerTwoDiscard));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.saveUserDiscard(playerTwoDiscard));
    }
    else {
      dispatch(fromMatch.savePreviousPlayerDiscard(playerTwoDiscard));
    }  
  });
  database.ref('/matches/'+matchId+'/playerTwo/hand/').on("value", snapshot => {
    let playerTwoHand= [];
    snapshot.forEach(function(childSnapshot) {
      playerTwoHand.push(childSnapshot.val());
    });
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.savePreviousPlayerHand(playerTwoHand));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.saveUserHand(playerTwoHand));
    }
    else {
      dispatch(fromMatch.savePreviousPlayerHand(playerTwoHand));
    }
  });
}

export function listenForPlayerThreeUpdates(dispatch) {
  database.ref('/matches/'+matchId+'/playerThree/deck/').on("value", snapshot => {
    let playerThreeDeck= [];
    snapshot.forEach(function(childSnapshot) {
      playerThreeDeck.push(childSnapshot.val());
    });
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveNextPlayerDeck(playerThreeDeck));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerDeck(playerThreeDeck));    
    }
    else {
      dispatch(fromMatch.saveUserDeck(playerThreeDeck));
    }
  });
  database.ref('/matches/'+matchId+'/playerThree/discard/').on("value", snapshot => {
    let playerThreeDiscard= [];
    snapshot.forEach(function(childSnapshot) {
      playerThreeDiscard.push(childSnapshot.val());
    });
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveNextPlayerDiscard(playerThreeDiscard));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerDiscard(playerThreeDiscard));    
    }
    else {
      dispatch(fromMatch.saveUserDiscard(playerThreeDiscard));
    }  
  });
  database.ref('/matches/'+matchId+'/playerThree/hand/').on("value", snapshot => {
    let playerThreeHand= [];
    snapshot.forEach(function(childSnapshot) {
      playerThreeHand.push(childSnapshot.val());
    });    
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveNextPlayerHand(playerThreeHand));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerHand(playerThreeHand));    
    }
    else {
      dispatch(fromMatch.saveUserHand(playerThreeHand));
    }  
  });
}

export function loginUser(un, dispatch) {
  setCookie("user", un);
  user= un;
  listenForMatches(dispatch);
  dispatch(fromHeader.logIn(un));
}

export function matchMount(dispatch) {
  console.log("@@@@@@@@@@@@@@@@@@");
  if(matchId===null) {
    displayError("Go back to the lobby and select a match!");
  }
  getMatchPlayers(dispatch);
}

export function openRules() {
  window.open("https://docs.google.com/document/d/1L2AIySPlRm0gVUJXQpAMcdTZ-I4zT8VYX3ef21cu3mE/edit?usp=sharing", "_blank", "location=yes");
}

export function playMatch(key, dispatch) {
  console.log("playing match "+key);
  setCookie("match", key);
  matchId= key;
}

export function registerUser(username, password, dispatch) {
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

export function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";expires=Thu, 21 July 2050 01:00:00 UTC;";
    console.log(cname+" cookie set as "+cvalue);
}

function setMatchPlayerNumbers(dispatch, players) {
  console.log("setting user ^^^^^^ "+players.length+players.toString());
  const threePlayers = players.length === 3;
  if(players[0] === user) {
    userPlayerNumber= "playerOne";
    dispatch(fromMatch.saveNextPlayerUser(players[1]));
    if(threePlayers) {
      dispatch(fromMatch.savePreviousPlayerUser(players[2]));
    }
  }
  else if(players[1] === user) {
    userPlayerNumber= 'playerTwo';
    if(threePlayers) {
       dispatch(fromMatch.saveNextPlayerUser(players[2]));
       dispatch(fromMatch.savePreviousPlayerUser(players[0]));
    }
    else {
      dispatch(fromMatch.saveNextPlayerUser(players[0]));
    }
  }
  else if(players[2] === user) {
    userPlayerNumber= "playerThree";
     dispatch(fromMatch.saveNextPlayerUser(players[0]));
     dispatch(fromMatch.savePreviousPlayerUser(players[1]));
  }
  else {
    displayError("You are not a player in this match!");
    return "";
  }
  console.log("USER PLAYER N SET TO: "+userPlayerNumber);
  dispatch(fromMatch.saveUserPlayerNumber(userPlayerNumber));
  dispatch(fromMatch.saveUser(user));
  listenForMatchUpdates(dispatch);
}

export function shuffleArray(initialArray) {
  var randomIndex;
  var finalArray= [];
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
  var updates= {};
  updates['matches/'+key+'/status']= "in progress";
  database.ref().update(updates);
}

export function updateMatchPlayerArray(player, arrayType, array) {
  var updates= {};
  updates['matches/'+matchId+'/'+player+'/'+arrayType]= array;
  database.ref().update(updates);
}
