import firebase from 'firebase';
import { fromHeader, fromLobby, fromMatch } from '../actions'
import { defaultMarketArray } from './'


var user= getCookie('user');

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
  else if(cp != pw) {
    dispatch(fromHeader.setRegisterErrorMessage("The confirm password does not match the password!"));
  }
  else {
    database.ref('/users/' + un).on('value', snapshot => {
      console.log("db un: "+snapshot.val());
      const username= snapshot.val();
      if(username != null) {
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
        database.ref('matches/'+(parseInt(childSnapshot.key)+1)).set({
          playerOne: user,
          playerTwo: null,
          playerThree: null,
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

export function getCardInfo(id) {
  console.log("gonna get the info for card "+id);
}

export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            console.log("calling get cookie, got: "+c.substring(name.length, c.length));
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

export function getMatchPlayers(matchId) {
  database.ref('matches/'+matchId).once('value')
    .then(function(snapshot) {
      const pOne= snapshot.child('/playerOne').val();
      const pTwo= snapshot.child('/playerTwo').val();
      const pThree= snapshot.child('/playerThree').val();
      return [pOne, pTwo, pThree];
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function joinMatch(key, playerList) {
  console.log("joining match "+key);
  const players= playerList.split(", ");
  for(var i=0; i < players.length; i++) {
    console.log("player "+i+" of players: "+players[i]);
  }
  var updates= {};
  if(players.length > 1) {
    updates['matches/'+key+'/playerThree']= user;
  }
  else {
    updates['matches/'+key+'/playerTwo']= user;
  }
  database.ref().update(updates);
}

export function listenForMatches(dispatch) {
  database.ref('matches/').on('value', snapshot => {
    const matchList= [];
    snapshot.forEach(function(childSnapshot) {
      const pOne= childSnapshot.child('/playerOne').val();
      const pTwo= childSnapshot.child('/playerTwo').val();
      const pThree= childSnapshot.child('/playerThree').val();
      const joinedPlayers= [pOne, pTwo, pThree].filter(function(n){ return n != undefined }).join(', ');
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
  const matchId= getCookie("match");
  console.log("going to get match market array for match "+matchId);
  database.ref('/matches/'+matchId+'/market/').once("value")
    .then(function(snapshot) {
      console.log("market array from matches is: "+JSON.stringify(snapshot.val()));
      dispatch(fromMatch.saveMarketArray(snapshot.val()));
    } );
}

export function loginUser(un, dispatch) {
  setCookie("user", un);
  user= un;
  listenForMatches(dispatch);
  dispatch(fromHeader.logIn(un));
}

export function openRules() {
  window.open("https://docs.google.com/document/d/1L2AIySPlRm0gVUJXQpAMcdTZ-I4zT8VYX3ef21cu3mE/edit?usp=sharing", "_blank", "location=yes");
}

export function playMatch(key) {
  console.log("playing match "+key);
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

export function shuffleArray(initialArray) {
  var randomIndex;
  var finalArray= [];
  while(initialArray.length > 0) {
    randomIndex= getRandomInt(initialArray.length);
    finalArray.push(initialArray[randomIndex]);
    // this is going to move the value of the final entry into the selected entry, so I can pop the final entry. If the selected one is the final one, no need to swap.
    if(randomIndex != initialArray.length-1) {
      initialArray[randomIndex]= initialArray[initialArray.length-1];
    }
    initialArray.pop();
  }
  return finalArray;
}

export function startMatch(key) {
  console.log("starting match "+key);
  setCookie("match", key);
  var updates= {};
  updates['matches/'+key+'/status']= "in progress";
  database.ref().update(updates);
}