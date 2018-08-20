import firebase from 'firebase';
import { fromHeader, fromMatch } from '../actions'
import { cardMap, defaultMarketArray, defaultStartingArray, listenForMatches, listenForMatchUpdates, wasteKey } from './'


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
    plant: 1,
    harvest: 0,
    scrap: 0,
    marketScrap: 0
  };
  insertObject(path+'/counters', counters);
  insertObject(path+'/color', color);
  insertObject(path+'/user', user);
  insertObject(path+'/deck', deck);
  insertObject(path+'/hand', hand);
}

export function buyField(fieldIdToReplace, market, matchPath, newCoin, newFieldId, playerNumber) {
  console.log("playing field: "+newFieldId);
  const playerWord= convertPlayerNumberToWord(playerNumber);
  const playerRef= matchPath+'/'+playerWord;
  const newField= {id: newFieldId, crops: [], available: false};
  if(fieldIdToReplace!==null) {
    const query= database.ref(playerRef);
    query.once("value")
      .then(function(snapshot) {
        let crops= [];
        snapshot.child('/fields').child(fieldIdToReplace).child('/crops').forEach(function(childSnapshot) {
          crops.push(childSnapshot.val());
        });
        database.ref(playerRef+'/fields/'+newFieldId).set(newField);
        buyWrapUp(newFieldId, matchPath, newCoin, crops, playerWord);
      });
  }
  else {
    database.ref(playerRef+'/fields/'+newFieldId).set(newField);
    buyWrapUp(newFieldId, market, matchPath, newCoin, [], playerWord);
  }
}

export function buyMarketCard(id, market, matchPath, newCoin, userPlayerNumber) {
  const userWord= convertPlayerNumberToWord(userPlayerNumber);
  buyWrapUp(id, market, matchPath, newCoin, [id], userWord);
}

function buyWrapUp(id, market, matchPath, newCoin, newDiscard, userWord) {
  insertObject( matchPath+'/'+userWord+'/discard', newDiscard);
  removeAndInsertArray(market, id, matchPath+'/market');
  insertObject( matchPath+'/'+userWord+'/counters/coin', newCoin);
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

export function convertPlayerNumberToWord(number) {
    if(number === 0) {
      return 'playerOne';
    }
    else if(number === 1) {
      return 'playerTwo';
    }
    else {
      return 'playerThree';
    }
}

export function convertPlayerWordToNumber(word) {
    if(word === 'playerOne') {
      return 0;
    }
    else if(word === 'playerTwo') {
      return 1;
    }
    else {
      return 2;
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
        insertObject(path+'/currentPlayerNumber', 0);
        const market= shuffleArray(defaultMarketArray);
        console.log("inserting market: "+market.toString());
        insertObject(path+'/market', market);
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

function drawCards(matchPath, numberOfCards, playerNumber, playerObject) {
  console.log(playerObject.user+" is about to draw "+numberOfCards);
  const originalHandSize= playerObject.hand.length;
  const playerWord= convertPlayerNumberToWord(playerNumber);
  if(playerObject.deck.length < numberOfCards) {
    while(playerObject.deck.length > 0) {  
      playerObject.hand.push(playerObject.deck.pop());
    }
    playerObject.deck= [...shuffleArray(playerObject.discard)];    
    while(playerObject.hand.length < originalHandSize + numberOfCards) {
      playerObject.hand.push(playerObject.deck.pop());
      if(playerObject.deck.length === 0) {
        break;
      }
    }
    removeFromDatabase(matchPath+'/'+playerWord+'/discard');
  }
  else {
    for(var i=0; i<numberOfCards; i++) {
      playerObject.hand.push(playerObject.deck.pop());
    }
  }
  console.log("after drawing: "+JSON.stringify(playerObject));

  insertObject(matchPath+'/'+playerWord+'/hand', playerObject.hand);
  insertObject(matchPath+'/'+playerWord+'/deck', playerObject.deck);
}

export function endTurn(currentPlayerNumber, userPlayer, matchPath, numberOfPlayers, playArea) {
  let discard= (userPlayer.discard === null ? [] : userPlayer.discard);
  playArea= (playArea === null ? [] : playArea);
  const playerWord= convertPlayerNumberToWord(currentPlayerNumber);
//updates player's hand, deck and discard
console.log("their info: "+JSON.stringify(userPlayer));
  let newDiscard= discard.concat(userPlayer.hand);
  newDiscard= newDiscard.concat(playArea);
  userPlayer.discard= newDiscard;
  console.log("new discard looking like: "+newDiscard.toString());
  insertObject(matchPath+'/'+playerWord+'/discard', newDiscard);
  userPlayer.hand= [];
  drawCards(matchPath, 5, currentPlayerNumber, userPlayer);
  
  const newTurnCounters= {
    coin: 0,
    plant: 1,
    harvest: 0,
    scrap: 0,
    marketScrap: 0
  };
  insertObject(matchPath+'/'+playerWord+"/counters", newTurnCounters);
  for(var i=0; i<userPlayer.fields.length; i++) {
    database.ref(matchPath+'/'+playerWord+'/fields/'+userPlayer.fields[i].id+'/available').set(true);
  console.log(matchPath+'/'+playerWord+'/fields/'+userPlayer.fields[i].id+'/available should now be true');
  }
  database.ref(matchPath+'/playArea').set(null);

//updates currentPlayer for next player
  currentPlayerNumber= (currentPlayerNumber+1)%numberOfPlayers;
  insertObject(matchPath+'/currentPlayerNumber', currentPlayerNumber);
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
      const pTwo= snapshot.child('playerTwo/').child('/user').val();
      const pThree= snapshot.child('playerThree/').child('/user').val();
      let userPlayerNumber=null;
      if(user===pOne) {
        userPlayerNumber=0;
      }
      else if(user===pTwo) {
        userPlayerNumber=1;
      }
      else if(user===pThree) {
        userPlayerNumber=2;
      }
      dispatch(fromMatch.saveUserPlayerNumber(userPlayerNumber));
      const matchPlayers= [pOne, pTwo, pThree].filter(function(n){ return n !== null });
      dispatch(fromMatch.saveNumberOfPlayers(matchPlayers.length));
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function harvestCrop(cropId, fieldData, matchPath, playArea, playerNumber, userData) {
  console.log("Harvesting "+cropId);
  const cropData= cardMap[cropId];
  //harvest effect of card is played as if from hand (counters updated, goes into play area)
  if(cropData.type==="seed") {
    playCard(cropData.secondary, cropId, matchPath, playArea, playerNumber, userData);
  }
  //or, it just goes in play area if not a selected
  else {
    playArea.push(cropId);
    insertObject(matchPath+'/playArea', playArea);
  }
  const playerWord= convertPlayerNumberToWord(playerNumber);
  //for counter: take away a harvest...
  let counters= userData.counters;
  counters.harvest = counters.harvest-1;
  //add in the field's primary effect...
  const fieldCard= cardMap[fieldData.id];
  console.log("harvest from field: "+JSON.stringify(fieldCard));
  counters= updateUserCounters(fieldCard.primary, userData.counters);
  //and maybe secondary
  if(cropData.faction===fieldCard.faction) {
    counters= updateUserCounters(fieldCard.secondary, userData.counters);
  }
  updateDatabaseCounters(counters, matchPath, playerWord);
  //remove the id from the crop array
  fieldData.crops.splice(fieldData.crops.indexOf(cropId), 1);
  console.log("new crop array without "+cropId+": "+fieldData.crops);
  insertObject(matchPath+'/'+playerWord+'/fields/'+fieldData.id+'/crops', fieldData.crops);
}

function insertObject(dbPath, obj) {
  database.ref(dbPath).set(obj, function(error) {
    if(error) {
      console.log("object submission error");
    }
    else {
      console.log(JSON.stringify(obj)+" inserted");
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
      listenForMatchUpdates(dispatch, matchPath);
    }
  }
}

export function openRules() {
  window.open("https://docs.google.com/document/d/1L2AIySPlRm0gVUJXQpAMcdTZ-I4zT8VYX3ef21cu3mE/edit?usp=sharing", "_blank", "location=yes");
}

export function plantCard(cardId, field, matchPath, plantCounter, playerNumber, playerObject) {
  console.log("Planting "+cardId+" in: "+JSON.stringify(field));
  const playerWord= convertPlayerNumberToWord(playerNumber);
  field.crops.push(cardId);
  insertObject(matchPath+'/'+playerWord+'/fields/'+field.id+'/crops', field.crops);
  database.ref(matchPath+'/'+playerWord+'/fields/'+field.id+'/available').set(false);
  removeAndInsertArray(playerObject.hand, cardId, matchPath+'/'+playerWord+'/hand');
  insertObject(matchPath+'/'+playerWord+'/counters/plant', plantCounter-1);
}

export function playCard(activatedArea, id, matchPath, playArea, playerNumber, playerObject) {
  const playerWord= convertPlayerNumberToWord(playerNumber);
  console.log(playerWord+" played card "+id+'\n'+"They have these counters "+JSON.stringify(playerObject.counters)+'\n'+" and are about to add "+JSON.stringify(activatedArea));
  database.ref(matchPath+'/'+playerWord+'/hand/'+id).set(null);
  playArea.push(id);
  insertObject(matchPath+'/playArea', playArea);
  if(activatedArea.draw > 0) {
    drawCards(matchPath, activatedArea.draw, playerNumber, playerObject);
  }
  if(activatedArea.waste > 0) {
    playerObject.discard.push(wasteKey);
    insertObject(matchPath+'/'+playerWord+'/discard', playerObject.discard);
  }
  removeAndInsertArray(playerObject.hand, id, matchPath+'/'+playerWord+'/hand');
  playerObject.counters= updateUserCounters(activatedArea, playerObject.counters);
  updateDatabaseCounters(playerObject.counters, matchPath, playerWord);
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

function removeAndInsertArray(array, id, path) {
  console.log("hand before splicing "+id+'\n'+JSON.stringify(array));
  array.splice(array.indexOf(id), 1);
  console.log("And after: "+JSON.stringify(array));
  insertObject(path, array);
}

function removeFromDatabase(path) {
  let updates= {};
  updates[ path ]= null;
  database.ref().update(updates);
}

export function scrapCard(cardId, scrapCounter, matchPath, playerNumber, playerObject, trashArray) {
  const playerWord= convertPlayerNumberToWord(playerNumber);
  trashArray.push(cardId);
  insertObject(matchPath+'/trashPile', trashArray);
  removeAndInsertArray(playerObject.hand, cardId, matchPath+'/'+playerWord+'/hand');
  insertObject(matchPath+'/'+playerWord+'/counters/scrap', scrapCounter-1);
}

export function scrapMarketCard(cardId, scrapCounter, market, matchPath, playerNumber, trashArray) {
  const playerWord= convertPlayerNumberToWord(playerNumber);
  trashArray.push(cardId);
  insertObject(matchPath+'/trashPile', trashArray);
  removeAndInsertArray(market, cardId, matchPath+'/market');
  insertObject(matchPath+'/'+playerWord+'/counters/marketScrap', scrapCounter-1);
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";expires=Thu, 21 July 2050 01:00:00 UTC;";
    console.log(cname+" cookie set as "+cvalue);
}

function shuffleArray(passedArray) {
  let initialArray= [...passedArray];
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
  insertObject('matches/'+key+'/status', "in progress");
}

function updateMatchArray(matchPath, array) {
  database.ref(matchPath).set(null);
  let updates= {};
  for(var i= 0; i < array.length; i++) {
    updates[matchPath+'/'+array[i]]= {".value": array[i], ".priority": i};
  }
  database.ref().update(updates);
}

function updateUserCounters(activatedArea, counters) {
  return counters= {
    plenty: counters.plenty+(activatedArea.plenty===undefined?0:activatedArea.plenty),
    coin: counters.coin+(activatedArea.coin===undefined?0:activatedArea.coin),
    plant: counters.plant+(activatedArea.plant===undefined?0:activatedArea.plant),
    harvest: counters.harvest+(activatedArea.harvest===undefined?0:activatedArea.harvest),
    scrap: counters.scrap+(activatedArea.scrap===undefined?0:activatedArea.scrap),
    marketScrap: counters.marketScrap+(activatedArea.marketScrap===undefined?0:activatedArea.marketScrap)
  };
}

function updateDatabaseCounters(counters, matchPath, playerWord) {
  console.log("new counters: "+JSON.stringify(counters));
  let updates= {};
  updates[matchPath+'/'+playerWord+'/counters']= counters;
  database.ref().update(updates);
}