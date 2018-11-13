import firebase from 'firebase';
import { fromHeader, fromMatch } from '../actions'
import { cardMap, choosableColors, defaultMarketArray, oneStartingDeck, twoStartingDeck, threeStartingDeck, listenForMatches, listenForMatchUpdates, starterFields, wasteKey } from './'


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


function activateAttack(attack, matchPath, playerWord) {
  console.log("An attack is happening from "+playerWord);
  database.ref(matchPath+'/').once('value')
  .then(function(snapshot) {
    const pOne= snapshot.child('playerOne/').child('/user').val();
    const pTwo= snapshot.child('playerTwo/').child('/user').val();
    const pThree= snapshot.child('playerThree/').child('/user').val();
    console.log("The players are: "+pOne+pTwo+pThree);
    if(playerWord !== pOne) {
      console.log("attacking one");
      insertObject(matchPath+'/playerOne/attack', attack);
    }
    if(playerWord !== pTwo) {
      console.log("attacking two");
      insertObject(matchPath+'/playerTwo/attack', attack);
    }
    if(pThree !== null && pThree !== playerWord) {
      console.log("attacking threee");
      insertObject(matchPath+'/playerThree/attack', attack);
    }
  });
}

function activateCounters(counters, dispatch, matchPath, playerWord, playerObject) {
  console.log("activating these counters: "+JSON.stringify(counters));
  if(counters.draw > 0) {
    drawCards(matchPath, counters.draw, playerWord, playerObject);
    counters.draw= 0;
    console.log("cards drawn, continuing with counters: "+JSON.stringify(counters));
  }
  if(counters.waste > 0) {
    while(counters.waste > 0) {
      playerObject.discard.push(wasteKey);
      counters.waste= counters.waste-1;
    }
    insertObject(matchPath+'/'+playerWord+'/discard', playerObject.discard);
  }
  if(counters.discard > 0) {
    openDiscardChoiceModal(dispatch, counters, playerWord, playerObject.hand);
  }
  updateDatabaseCounters(counters, matchPath, playerWord);
}

function addPlayerToMatch(dispatch, path, deck, hand, playerWord, user) {
  console.log("player to add to "+path+": "+JSON.stringify(user));
  dispatch(fromMatch.saveMatchPath(path));
  const counters= {
    plenty: 0,
    coin: 0,
    plant: 1,
    harvest: 0,
    scrap: 0,
    marketScrap: 0
  };
      
  database.ref(path+'/starterFields').once('value')
    .then(function(snapshot) {
      let starters= snapshot.val();
      console.log("the starter fields are: "+starters);
      const fieldId= starters.pop();
      console.log("field id is: "+fieldId+"... and now starters: "+starters);
      insertObject(path+'/starterFields', starters);
      const playerObject= {counters: counters, color: "grey", user: user, deck: deck, hand: hand, activatedFactions: {0: cardMap[fieldId].faction}};
      insertObject(path+'/'+playerWord, playerObject);
      const field= {id: fieldId, crops: [], available: true};
      insertObject(path+'/'+playerWord+'/fields/'+fieldId, field);
      chooseUserColor(dispatch, path, playerWord);
    });
}

export function buyField(fieldIdToReplace, market, matchPath, newCoin, newFieldId, playerWord) {
  console.log("playing field: "+newFieldId);
  const newField= {id: newFieldId, crops: [], available: false};
  if(fieldIdToReplace!==null) {
    const query= database.ref(matchPath);
    query.once("value")
      .then(function(snapshot) {
        let crops= [];
        snapshot.child(playerWord+'/fields').child(fieldIdToReplace).child('/crops').forEach(function(childSnapshot) {
          crops.push(childSnapshot.val());
        });
        database.ref(matchPath+'/'+playerWord+'/fields/'+newFieldId).set(newField);
        buyWrapUp(newFieldId, matchPath, newCoin, crops, playerWord);
        if(starterFields.includes(fieldIdToReplace)) {
          let newStarters= snapshot.child("starterFields").val();
          newStarters.splice(0, 0, fieldIdToReplace);
          insertObject(matchPath+'/starterFields', newStarters);
        }
      });
  }
  else {
    database.ref(matchPath+'/'+playerWord+'/fields/'+newFieldId).set(newField);
    buyWrapUp(newFieldId, market, matchPath, newCoin, [], playerWord);
  }
}

export function buyMarketCard(id, market, matchPath, newCoin, userObject, userWord) {
  userObject.discard.push(id);
  buyWrapUp(id, market, matchPath, newCoin, userObject.discard, userWord);
}

export function buyMarketPlenty(matchPath, playerNumber, userPlayer) {
  const playerWord= convertPlayerNumberToWord(playerNumber);
  userPlayer.counters.coin= userPlayer.counters.coin-5;
  userPlayer.counters.plenty= userPlayer.counters.plenty+1;
  insertObject(matchPath+'/'+playerWord+'/counters', userPlayer.counters);
}

export function buyStarterField(dispatch, marketArray, matchPath, user, playerNumber) {
  const playerWord= convertPlayerNumberToWord(playerNumber);
  database.ref(matchPath+'/starterFields').once('value')
    .then(function(snapshot) {
      let starters= snapshot.val();
      const fieldId= starters.pop();
      insertObject(matchPath+'/starterFields', starters);
      if(user.fields.length===2) {
        const title= "Replace which field?";
        const parentInfo= fieldId;
        const options= [{id: user.fields[0].id, title: cardMap[user.fields[0].id].title}, {id: user.fields[1].id, title: cardMap[user.fields[1].id].title}];
        dispatch(fromMatch.openChoiceModal(options, parentInfo, true, title));
      }
      else {
        buyField(null, marketArray, matchPath, user.counters.coin - cardMap[fieldId].cost, fieldId, playerWord);
      }
    });
}

function buyWrapUp(id, market, matchPath, newCoin, newDiscard, userWord) {
  insertObject( matchPath+'/'+userWord+'/discard', newDiscard);
  removeAndInsertArray(market, id, matchPath+'/market');
  insertObject( matchPath+'/'+userWord+'/counters/coin', newCoin);
}

export function combineCounters(one, two) {
  
  console.log("combining: "+JSON.stringify(one)+'\n'+JSON.stringify(two));
  one= {
    plenty: one.plenty===undefined?0:one.plenty,
    coin: one.coin===undefined?0:one.coin,
    plant: one.plant===undefined?0:one.plant,
    harvest: one.harvest===undefined?0:one.harvest,
    scrap: one.scrap===undefined?0:one.scrap,
    marketScrap: one.marketScrap===undefined?0:one.marketScrap,
    draw: one.draw===undefined?0:one.draw,
    discard: one.discard===undefined?0:one.discard,
    waste: one.waste===undefined?0:one.waste,

    attack: one.attack===undefined?null:one.attack,
  };
  two= {
    plenty: two.plenty===undefined?0:two.plenty,
    coin: two.coin===undefined?0:two.coin,
    plant: two.plant===undefined?0:two.plant,
    harvest: two.harvest===undefined?0:two.harvest,
    scrap: two.scrap===undefined?0:two.scrap,
    marketScrap: two.marketScrap===undefined?0:two.marketScrap,
    draw: two.draw===undefined?0:two.draw,
    discard: two.discard===undefined?0:two.discard,
    waste: two.waste===undefined?0:two.waste,

    attack: two.attack===undefined?null:two.attack,
  };
  console.log("UPDATED combining: "+JSON.stringify(one)+'\n'+JSON.stringify(two));
  return {
    plenty: one.plenty + two.plenty,
    coin: one.coin + two.coin,
    plant: one.plant + two.plant,
    harvest: one.harvest + two.harvest,
    scrap: one.scrap + two.scrap,
    marketScrap: one.marketScrap + two.marketScrap,
    draw: one.draw + two.draw,
    discard: one.discard + two.discard,
    waste: one.waste + two.waste,

    attack: one.attack!==null?(two.attack!==null?combineCounters(one.attack, two.attack):one.attack):null,
  }
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
  const badChars= [".", "#", "$", "[", "]"];
  let bad= false;
  for(var i= 0; i< badChars.length; i++) {
    if(un.indexOf(badChars[i]) > -1) {
      bad= true;
      break;
    }
    if(pw.indexOf(badChars[i]) > -1) {
      bad= true;
      break;
    }
  }
  if(bad===true) {
    dispatch(fromHeader.setRegisterErrorMessage("You cannot use any '. # $ [ ]' characters"));
  }
  else if(un.length < 2) {
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

function chooseUserColor(dispatch, matchPath, playerWord) {
  database.ref(matchPath).once('value')
    .then(function(snapshot) {
      const colorTitle= "Pick a color for the match";
      const colorParentInfo= playerWord;
      let colorOptions= [];
      for(var i=0; i < choosableColors.length; i++) {
        if(snapshot.child("playerOne").child("color").val() !== choosableColors[i]) {
          if(snapshot.child("playerTwo").val() === null || snapshot.child("playerTwo").child("color").val() !== choosableColors[i]) {
            colorOptions.push({id: choosableColors[i], title: choosableColors[i]});
          }
        }
      }
      console.log("Refined color list: "+JSON.stringify(colorOptions));
      dispatch(fromMatch.openChoiceModal(colorOptions, colorParentInfo, true, colorTitle));

    });
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

function createMatch(dispatch, commField, user) {
  const keyQuery= database.ref('/matches/').orderByKey().limitToLast(1);
  keyQuery.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        const path= 'matches/'+(parseInt(childSnapshot.key)+1);
        console.log("Creating match "+path);

        insertObject(path+'/status', "pending");
        
        const today = new Date();
        const todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        insertObject(path+'/date', todayDate);
        
        insertObject(path+'/starterFields', shuffleArray(starterFields.slice()));
        
        insertObject(path+'/currentPlayerNumber', 0);

        insertObject(path+'/turnCount', 1);
        
        const market= shuffleArray(defaultMarketArray);
        console.log("inserting market: "+market.toString());
        insertObject(path+'/market', market);
        
        insertObject(path+'/communityField', commField);

        let pOneDeck= shuffleArray(oneStartingDeck.slice());
        let hand= [pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop(), pOneDeck.pop()];
        addPlayerToMatch(dispatch, path, pOneDeck, hand, "playerOne", user);
      });
    });
}

export function deleteCookie(cname) {
  document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

export function deleteMatch(id) {
  removeFromDatabase('/matches/'+id);
}

function displayError(message) {
  console.log("ERROR ERROR - "+message);
}

function drawCards(matchPath, numberOfCards, playerWord, playerObject) {
  console.log(playerObject.user+" is about to draw "+numberOfCards);
  const originalHandSize= playerObject.hand.length;
  if(playerObject.deck.length < numberOfCards) {
    while(playerObject.deck.length > 0) {
      playerObject.hand.push(playerObject.deck.pop());
    }
    playerObject.deck= [...shuffleArray(playerObject.discard)];
    while(playerObject.hand.length < originalHandSize + numberOfCards) {
      if(playerObject.deck.length === 0) {
        break;
      }
      playerObject.hand.push(playerObject.deck.pop());
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

export function endTurn(currentPlayerNumber, userPlayer, matchPath, numberOfPlayers, playArea, turnCount) {
  if(userPlayer.counters.plenty >= 30) {
    insertObject(matchPath+'/winner', userPlayer.user);
    return;
  }
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
  drawCards(matchPath, 5, playerWord, userPlayer);
  
  const newTurnCounters= {
    plenty: userPlayer.counters.plenty,
    coin: 0,
    plant: 1,
    harvest: 0,
    scrap: 0,
    marketScrap: 0
  };
  insertObject(matchPath+'/'+playerWord+"/counters", newTurnCounters);
  let newlyActivatedFactions= [];
  for(var i=0; i<userPlayer.fields.length; i++) {
    database.ref(matchPath+'/'+playerWord+'/fields/'+userPlayer.fields[i].id+'/available').set(true);
    newlyActivatedFactions.push(cardMap[userPlayer.fields[i].id].faction);
  }
  insertObject(matchPath+'/'+playerWord+'/activatedFactions', newlyActivatedFactions);
  database.ref(matchPath+'/playArea').set(null);
  database.ref(matchPath+'/communityField/available').set(true);

//updates currentPlayer for next player
  currentPlayerNumber= (currentPlayerNumber+1)%numberOfPlayers;
  insertObject(matchPath+'/currentPlayerNumber', currentPlayerNumber);
  if(currentPlayerNumber===0) {
    insertObject(matchPath+'/turnCount', turnCount+1);
  }
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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function harvestCall(dispatch, fieldData, matchPath, playArea, playerNumber, userData) {
  console.log("harvesting from field: "+JSON.stringify(fieldData));
  
  if(fieldData.crops.length > 1) {
    let options= [];
    for(var i=0; i < fieldData.crops.length; i++) {
      options.push({id: fieldData.crops[i], title: i+1})
    }
    const parentInfo= fieldData;
    const title= "Harvest which crop from "+cardMap[fieldData.id].title+"?";
    dispatch(fromMatch.openChoiceModal(options, parentInfo, false, title));
    return;
  }
  else {
    harvestCrop(fieldData.crops[0], dispatch, fieldData, matchPath, playArea, playerNumber, userData);
  }
}

export function harvestCrop(cropId, dispatch, fieldData, matchPath, playArea, playerNumber, userData) {
  console.log("Harvesting "+cropId);
  dispatch(fromMatch.closeChoiceModal());

  const playerWord= convertPlayerNumberToWord(playerNumber);
  const cropData= cardMap[cropId];

  //for counter: take away a harvest...
  let counters= userData.counters;
  counters.harvest = counters.harvest-1;
  //add in the field's primary effect...
  const fieldCard= cardMap[fieldData.id];
  console.log("harvest from field: "+JSON.stringify(fieldCard));

    //check for exceptional fields
  if(fieldCard.primary.special !== undefined) {
    if(fieldCard.primary.special === "Neighborhood Field") {
      counters= combineCounters(counters, {plenty: fieldData.crops.length});
    }
  }
  else if(fieldCard.primary.cropCount !== undefined) {
    console.log("SPECIAL HARVEST SITUATION! COUNTING CROPS.");
    if(fieldData.crops.length > fieldCard.primary.cropCount) {
      counters= combineCounters(fieldCard.primary.higher, counters);
    }
    else {
      counters= combineCounters(fieldCard.primary.lower, counters);
    }
  }
  else {
    counters= combineCounters(fieldCard.primary, counters);
  }
  //and maybe secondary
  console.log("so crop faction is "+cropData.faction+'\n'+"and field faction is: "+fieldCard.faction);
  if(cropData.faction===fieldCard.faction) {
    counters= combineCounters(fieldCard.secondary, counters);
  }

  //and maybe the crop's seed secondary
  if(cropData.type==="seed") {
    counters= combineCounters(cropData.secondary, counters);
  }

  //finally activate what's been put together
  console.log("The combined harvest effects are: "+JSON.stringify(counters));
  if(counters.attack !== null) {
    activateAttack(counters.attack, matchPath, userData.user);
    counters.attack= null;
  }
  activateCounters(counters, dispatch, matchPath, playerWord, userData);

  //put the card in the play area...
  playArea.push(cropId);
  insertObject(matchPath+'/playArea', playArea);

  //remove the id from the crop array
  fieldData.crops.splice(fieldData.crops.indexOf(cropId), 1);
  console.log("new crop array without "+cropId+": "+fieldData.crops);
  if(1990< fieldData.id && fieldData.id <2000) {
    insertObject(matchPath+'/communityField/crops', fieldData.crops);
  }
  else {
    insertObject(matchPath+'/'+playerWord+'/fields/'+fieldData.id+'/crops', fieldData.crops);
  }
}

export function insertObject(dbPath, obj) {
  database.ref(dbPath).set(obj, function(error) {
    if(error) {
      console.log("object submission error");
    }
    else {
      console.log(JSON.stringify(obj)+" inserted at "+dbPath);
    }
  });
}

export function isCardPlayable(cardData, userData) {
  let primary= false;
  let secondary= true;
  if(cardData.primary.or !== undefined) {
    primary= (isAreaPlayable(cardData.primary.or.left, userData)===true || isAreaPlayable(cardData.primary.or.right, userData) === true);
  }
  else {
    primary= isAreaPlayable(cardData.primary, userData);
  }
  userData.activatedFactions = userData.activatedFactions===undefined?[]:userData.activatedFactions;
  if(userData.activatedFactions.includes(cardData.faction) && cardData.faction==="tool") {
    secondary= isAreaPlayable(cardData.secondary, userData);
  }
  return (primary && secondary);
}

export function isAreaPlayable(area, userData) {
  area.discard= area.discard===undefined?0:area.discard;
  if(area.discard <= userData.hand.length-1) {
    return true;
  }
  return false; 
}

export function isThereADefaultChoice(cardData, user) {
  let activatedCounters= null;
    if(cardData.primary.or === undefined) {
      activatedCounters= cardData.primary;
    }
    else if(isAreaPlayable(cardData.primary.or.left, user) === false) {
      activatedCounters= cardData.primary.or.right;
    }
    else if(isAreaPlayable(cardData.primary.or.right, user) === false) {
      activatedCounters= cardData.primary.or.left;
    }
  return activatedCounters;
}

export function joinMatch(dispatch, key, playerList, user) {
  const players= playerList.split(", ");
  const playerNumber= players.length > 1 ? "playerThree" : "playerTwo";
  let deck= playerNumber==="playerTwo"?shuffleArray(twoStartingDeck.slice()):shuffleArray(threeStartingDeck.slice());
  const hand= [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];
  addPlayerToMatch(dispatch, '/matches/'+key, deck, hand, playerNumber, user);
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
      setUpMatch(dispatch, matchPath, user);
    }
  }
}

export function modalAction(option, parentInfo, actionTitle, cardId, communityField, marketArray, matchPath, playArea, trashArray, user, userPlayerNumber, dispatch, history) {
  const playerWord= convertPlayerNumberToWord(userPlayerNumber);
  console.log("MODAL ACTION, option: "+JSON.stringify(option));
  let cardData= cardMap[cardId];
  console.log("card data: "+JSON.stringify(cardData));

    //not possible to be from choice modal
  if(actionTitle.startsWith("Buy")) {
    if(cardData.type==="field") {
      console.log("Buying a field");
      if(user.fields.length===2) {
        const title= "Replace which field?";
        const parentInfo= cardId;
        const options= [{id: user.fields[0].id, title: cardMap[user.fields[0].id].title}, {id: user.fields[1].id, title: cardMap[user.fields[1].id].title}];
        dispatch(fromMatch.openChoiceModal(options, parentInfo, true, title));
        return;
      }
      else {
        buyField(null, marketArray, matchPath, user.counters.coin - cardData.cost, cardId, playerWord);
      }
    }
    else {
      console.log("Buying not a field");
      buyMarketCard(cardId, marketArray, matchPath, user.counters.coin - cardData.cost, user, playerWord);
    }
  }

  else if(actionTitle.startsWith("Scrap")) {
    if(marketArray.includes(cardId)) {
      scrapMarketCard(cardId, user.counters.marketScrap, marketArray, matchPath, playerWord, trashArray);
    }
    else {
      scrapCard(cardId, user.counters.scrap, matchPath, playerWord, user, trashArray);
    }
  }

    // Maybe from choice modal
  else if(actionTitle.startsWith("Play")) {
    let activatedCounters= null;
    console.log("action title: "+actionTitle);
    if(actionTitle==="Play Left") {
      activatedCounters= cardData.primary.or.left;
    }
    else if(actionTitle==="Play Right") {
      activatedCounters= cardData.primary.or.right;
    }
    else {
      isThereADefaultChoice(cardData, user);  //checks if there's an 'or'
      console.log("Playing the card with these counters: "+JSON.stringify(activatedCounters));
      if(activatedCounters === null) { //there is
        if(option===null) { //it has not been decided, so puts up choice
          const title= "Play which side of the 'OR' statement?";
          const parentInfo= cardId;
          const options= [{id: cardId, title: "left"}, {id: cardId, title: "right"}];
          console.log("choice modal called! "+JSON.stringify(options));
          dispatch(fromMatch.openChoiceModal(options, parentInfo, false, title));
          return;
        }
        else { //it has been chosen, sets choice as activated area
          activatedCounters= (option.title==="left" ? cardData.primary.or.left : cardData.primary.or.right);
          console.log("The choice was made of what to play, it is: "+ JSON.stringify(activatedCounters));
        }
      }
    }
    user.activatedFactions= user.activatedFactions===undefined?[]:user.activatedFactions;
    console.log("playing card, and have activated factions: "+user.activatedFactions.toString()+'\n'+"this faction is: "+cardData.faction);
    if(user.activatedFactions.includes(cardData.faction) && cardData.type==="tool") { //if there's synergy, adds it in
      activatedCounters= combineCounters(activatedCounters, cardData.secondary);
    }
    console.log("playing counters: "+JSON.stringify(activatedCounters));

    playCard(activatedCounters, user.counters, dispatch, cardId, matchPath, playArea, playerWord, user);
  }

  else if(actionTitle.startsWith("Plant")) {
    console.log("user is planting");
    if(option === null) { //there is a choice of field which has not been answered
      const title= "Plant "+cardData.title+" in which field?";
      const parentInfo= cardId;
      let options= [];
      for(var i=0; i < user.fields.length; i++) {
        options.push({id: user.fields[i].id, title: cardMap[user.fields[i].id].title});
      }
      options.push({id: communityField.id, title: cardMap[communityField.id].title});
      console.log("choice modal called! "+JSON.stringify(options));
      dispatch(fromMatch.openChoiceModal(options, parentInfo, false, title));
      return;
    }
    else {
      let field= communityField;
        if(field.id !== option.id) {
          for(var i=0; i < user.fields.length; i++) {
            if(option.id === user.fields[i].id) {
              field= user.fields[i];
              break;
            }
          }
        }
        cardId= parentInfo;
      plantCard(cardId, field, matchPath, user.counters.plant, playerWord, user);
    }
  }


    //Definitely from choice modal
  else if(actionTitle.startsWith("Harvest")) {
    console.log("Choice was to harvest!");
    harvestCrop(option.id, dispatch, parentInfo, matchPath, playArea, userPlayerNumber, user);
    return;
  }
  else if(actionTitle.startsWith("Replace")) {
    buyField(option.id, marketArray, matchPath, user.counters.coin - cardMap[option.id].cost, parentInfo, playerWord);
  }
  else if(actionTitle.startsWith("Discard")) {
    console.log("The modal action is discarding!");
    user.discard.push(option.id);
    insertObject(matchPath+'/'+playerWord+'/discard', user.discard);
    user.hand.splice(user.hand.indexOf(option.id), 1);
    insertObject(matchPath+'/'+playerWord+'/hand', user.hand);
    
    parentInfo.discard= parentInfo.discard - 1;
    if(parentInfo.discard > 0) {
      openDiscardChoiceModal(dispatch, parentInfo, playerWord, user.hand);
      return;
    }
  }
  else if(actionTitle.startsWith("Share")) {
    const field= {id: option.id, crops: [], available: true};
    createMatch(dispatch, field, parentInfo);
  }

  else if(actionTitle.startsWith("Pick")) {
    console.log("updating color "+option.id+" for "+parentInfo);
    insertObject(matchPath+'/'+parentInfo+'/color', option.id);
  }

  else if(actionTitle.startsWith("Winner")) {
    history.push('/lobby');
  }

  if(option !== null) {
    dispatch(fromMatch.closeChoiceModal());
  }
  dispatch(fromMatch.closeCardModal());
}

function openDiscardChoiceModal(dispatch, counters, playerWord, hand) {
  console.log("asking to discard");
  const title= "Discard which card from your hand? ("+counters.discard+ " left to discard)";
  const parentInfo= counters;
  let options= [];
  for(var i=0; i<hand.length; i++) {
    options.push({id: hand[i], title: cardMap[hand[i]].title});
  }
  dispatch(fromMatch.openChoiceModal(options, parentInfo, true, title));
}

export function openRules() {
  window.open("https://docs.google.com/document/d/1L2AIySPlRm0gVUJXQpAMcdTZ-I4zT8VYX3ef21cu3mE/edit?usp=sharing", "_blank", "location=yes");
}

export function plantCard(cardId, field, matchPath, plantCounter, playerWord, playerObject) {
  console.log("Planting "+cardId+" in: "+JSON.stringify(field));
  if(field.crops === undefined) {
    field.crops= [];
  }
  field.crops.push(cardId);
  let path= matchPath+'/'+playerWord+'/fields/'+field.id;
  if(field.id > 1990 && field.id < 2001) {
    path= matchPath+'/communityField';
  }
  insertObject(path+'/crops', field.crops);
  database.ref(path+'/available').set(false);
  removeAndInsertArray(playerObject.hand, cardId, matchPath+'/'+playerWord+'/hand');
  insertObject(matchPath+'/'+playerWord+'/counters/plant', plantCounter-1);
}

export function playCard(activatedArea, counters, dispatch, id, matchPath, playArea, playerWord, playerObject) {
  console.log(playerWord+" played card "+id+'\n'+"They have these counters "+JSON.stringify(counters)+'\n'+" and are about to add "+JSON.stringify(activatedArea));
  playArea.push(id);
  insertObject(matchPath+'/playArea', playArea);
  removeAndInsertArray(playerObject.hand, id, matchPath+'/'+playerWord+'/hand');
  counters= combineCounters(activatedArea, counters);
  console.log("now counters (probably unchanged) are: "+JSON.stringify+' and attack: '+counters.attack===null);
  if(counters.attack !== null) {
    activateAttack(counters.attack, matchPath, playerObject.user);
    counters.attack= null;
  }
  console.log("the played card's effects have been combined with the users: "+JSON.stringify(counters));
  activateCounters(counters, dispatch, matchPath, playerWord, playerObject);

  const cardFaction= cardMap[id].faction;
  if(cardFaction !== "N") {
    playerObject.activatedFactions.push(cardFaction);
  }
  insertObject(matchPath+'/'+playerWord+'/activatedFactions', playerObject.activatedFactions);
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

export function removeFromDatabase(path) {
  let updates= {};
  updates[ path ]= null;
  database.ref().update(updates);
}

export function scrapCard(cardId, scrapCounter, matchPath, playerWord, playerObject, trashArray) {
  trashArray.push(cardId);
  insertObject(matchPath+'/trashPile', trashArray);
  removeAndInsertArray(playerObject.hand, cardId, matchPath+'/'+playerWord+'/hand');
  insertObject(matchPath+'/'+playerWord+'/counters/scrap', scrapCounter-1);
}

export function scrapMarketCard(cardId, scrapCounter, market, matchPath, playerWord, trashArray) {
  trashArray.push(cardId);
  insertObject(matchPath+'/trashPile', trashArray);
  removeAndInsertArray(market, cardId, matchPath+'/market');
  insertObject(matchPath+'/'+playerWord+'/counters/marketScrap', scrapCounter-1);
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";expires=Thu, 21 July 2050 01:00:00 UTC;";
    console.log(cname+" cookie set as "+cvalue);
}

function setUpMatch(dispatch, matchPath, user) {
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
      
      listenForMatchUpdates(dispatch, matchPath, userPlayerNumber);
    });
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

function updateDatabaseCounters(counters, matchPath, playerWord) {
  console.log("new counters: "+JSON.stringify(counters));
  console.log("putting them into "+matchPath+'/'+playerWord+'/counters');
  let updates= {};
  updates[matchPath+'/'+playerWord+'/counters']= counters;
  database.ref().update(updates);
}

