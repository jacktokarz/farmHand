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
  const today = new Date();
  const todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const keyQuery= database.ref('/matches/').orderByKey().limitToLast(1);
  keyQuery.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        let pOneDeck= shuffleArray(defaultStartingArray.slice());
        let hand= [pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop()];
      console.log("creating match with deck "+pOneDeck.toString());
        database.ref('matches/'+(parseInt(childSnapshot.key)+1)).set({
          playerOne: {
            user: user,
            deck: pOneDeck,
            hand: hand,
          },
          status: "pending",
          date: todayDate,
          market: shuffleArray(defaultMarketArray),
        }, function(error) {
          if(error) {
            console.log("match submission error");
          }
          else {
            console.log("match should be registered");
          }
        });
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

      const matchPlayers= [pOne, pTwo, pThree];
      console.log("match players: "+matchPlayers);
      setMatchPlayerNumbers(dispatch, matchPlayers);
      dispatch(fromMatch.saveMatchPlayers(matchPlayers));
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function joinMatch(key, playerList) {
  console.log("joining match "+key);
  const players= playerList.split(", ");
  let deck= shuffleArray(defaultStartingArray.slice());
  console.log("joining match with players: "+players.toString()+'\n'+"From deck: "+deck.toString());
  const hand= [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];
  console.log("joining with hand: "+hand.toString());
  const playerInfo= {
      user: user, 
      deck: deck,
      hand: hand,
    };
    console.log("player info: "+playerInfo.toString());
  let playerObject= {playerTwo: playerInfo};
  let playerNumber= "playerTwo";
  if(players.length > 1) {
    playerObject= {playerThree: playerInfo};
    playerNumber= "playerThree";
  }
  const matchPath= '/matches/'+key+'/'+playerNumber;
  insertObject(matchPath, playerInfo);
}

export function insertObject(dbPath, obj) {
  database.ref(dbPath).set(obj, function(error) {
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
  database.ref('/matches/'+matchId+'/market/').once("value")
    .then(function(snapshot) {
      console.log("market array from matches is: "+JSON.stringify(snapshot.val()));
      dispatch(fromMatch.saveMarketArray(snapshot.val()));
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
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveUserDeck(snapshot.val()));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerDeck(snapshot.val()));
    }
    else {
      dispatch(fromMatch.saveNextPlayerDeck(snapshot.val()));
    }
  });
  database.ref('/matches/'+matchId+'/playerOne/discard/').on("value", snapshot => {
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveUserDiscard(snapshot.val()));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerDiscard(snapshot.val()));
    }
    else {
      dispatch(fromMatch.saveNextPlayerDiscard(snapshot.val()));
    }
  });
  database.ref('/matches/'+matchId+'/playerOne/hand/').on("value", snapshot => {
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveUserHand(snapshot.val()));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerHand(snapshot.val()));
    }
    else {
      dispatch(fromMatch.saveNextPlayerHand(snapshot.val()));
    }
  });
}

export function listenForPlayerTwoUpdates(dispatch) {
  database.ref('/matches/'+matchId+'/playerTwo/deck/').on("value", snapshot => {
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.savePreviousPlayerDeck(snapshot.val()));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.saveUserDeck(snapshot.val()));    
    }
    else {
      dispatch(fromMatch.savePreviousPlayerDeck(snapshot.val()));
    }
  });
  database.ref('/matches/'+matchId+'/playerTwo/discard/').on("value", snapshot => {
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.savePreviousPlayerDiscard(snapshot.val()));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.saveUserDiscard(snapshot.val()));    
    }
    else {
      dispatch(fromMatch.savePreviousPlayerDiscard(snapshot.val()));
    }  
  });
  database.ref('/matches/'+matchId+'/playerTwo/hand/').on("value", snapshot => {
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.savePreviousPlayerHand(snapshot.val()));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.saveUserHand(snapshot.val()));    
    }
    else {
      dispatch(fromMatch.savePreviousPlayerHand(snapshot.val()));
    }
  });
}

export function listenForPlayerThreeUpdates(dispatch) {
  database.ref('/matches/'+matchId+'/playerThree/deck/').on("value", snapshot => {
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveNextPlayerDeck(snapshot.val()));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerDeck(snapshot.val()));    
    }
    else {
      dispatch(fromMatch.saveUserDeck(snapshot.val()));
    }
  });
  database.ref('/matches/'+matchId+'/playerThree/discard/').on("value", snapshot => {
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveNextPlayerDiscard(snapshot.val()));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerDiscard(snapshot.val()));    
    }
    else {
      dispatch(fromMatch.saveUserDiscard(snapshot.val()));
    }  
  });
  database.ref('/matches/'+matchId+'/playerThree/hand/').on("value", snapshot => {
    if(userPlayerNumber==='playerOne') {
      dispatch(fromMatch.saveNextPlayerHand(snapshot.val()));
    }
    else if(userPlayerNumber==='playerTwo') {
      dispatch(fromMatch.savePreviousPlayerHand(snapshot.val()));    
    }
    else {
      dispatch(fromMatch.saveUserHand(snapshot.val()));
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
  listenForMatchUpdates(dispatch);
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
  console.log("setting user ^^^^^^ "+players.toString);
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
  dispatch(fromMatch.saveUserPlayerNumber(userPlayerNumber));
  dispatch(fromMatch.saveUser(user));
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
