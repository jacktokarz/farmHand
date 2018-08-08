import { fromLobby, fromMatch } from '../actions'
import { database, getCookie } from './'


export function listenForMatches(dispatch) {
  database.ref('matches/').on('value', snapshot => {
  	let user= getCookie("user");
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
        if(!matchFull && status==="pending") {
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

function listenForMatchMarketArray(dispatch, matchPath ) {
  database.ref(matchPath+'/market/').on("value", snapshot => {
  	console.log("retrieving market info for "+matchPath);
    let market= [];
    snapshot.forEach(function(childSnapshot) {
      market.push(childSnapshot.val());
    });
    dispatch(fromMatch.saveMarketArray(market));
  } );
}

export function listenForMatchUpdates(dispatch, matchPath, userPlayerNumber) {
  listenForCurrentPlayer(dispatch, matchPath);
  listenForMatchMarketArray(dispatch, matchPath);
  listenForPlayerOneUpdates(dispatch, matchPath, userPlayerNumber);
  listenForPlayerTwoUpdates(dispatch, matchPath, userPlayerNumber);
  listenForPlayerThreeUpdates(dispatch, matchPath, userPlayerNumber);
}

function listenForCurrentPlayer(dispatch, matchPath ) {
  database.ref(matchPath+'/currentPlayer').on("value", snapshot => {
    console.log("current player is: "+snapshot.val());
    dispatch(fromMatch.updateCurrentPlayer(snapshot.val()));
  })
}

function listenForPlayerOneUpdates(dispatch, matchPath, userPlayerNumber) {
  database.ref(matchPath+'/playerOne/deck/').on("value", snapshot => {
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
  database.ref(matchPath+'/playerOne/discard/').on("value", snapshot => {
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
  database.ref(matchPath+'/playerOne/hand/').on("value", snapshot => {
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

function listenForPlayerTwoUpdates(dispatch, matchPath, userPlayerNumber) {
  database.ref(matchPath+'/playerTwo/deck/').on("value", snapshot => {
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
  database.ref(matchPath+'/playerTwo/discard/').on("value", snapshot => {
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
  database.ref(matchPath+'/playerTwo/hand/').on("value", snapshot => {
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

function listenForPlayerThreeUpdates(dispatch, matchPath, userPlayerNumber) {
  database.ref(matchPath+'/playerThree/deck/').on("value", snapshot => {
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
  database.ref(matchPath+'/playerThree/discard/').on("value", snapshot => {
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
  database.ref(matchPath+'/playerThree/hand/').on("value", snapshot => {
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