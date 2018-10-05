import { fromLobby, fromMatch } from '../actions'
import { cardMap, convertPlayerWordToNumber, database, getCookie, removeFromDatabase } from './'



function listenForCommunityField(dispatch, matchPath) {
	database.ref(matchPath+'/communityField/').on("value", snapshot => {
		console.log("comm field update!");
	    dispatch(fromMatch.saveCommunityField(snapshot.val()));
	})
}

function listenForCurrentPlayerNumber(dispatch, matchPath ) {
  database.ref(matchPath+'/currentPlayerNumber').on("value", snapshot => {
    console.log("current player is: "+snapshot.val());
    dispatch(fromMatch.updateCurrentPlayerNumber(snapshot.val()));
  })
}

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
	database.ref('matches/').off();
	userPlayerNumber= userPlayerNumber===0?"playerOne":(userPlayerNumber===1?"playerTwo":"playerThree");
	listenForCommunityField(dispatch, matchPath);
	listenForCurrentPlayerNumber(dispatch, matchPath);
	listenForMatchMarketArray(dispatch, matchPath);
	listenForPlayArea(dispatch, matchPath);
	listenForPlayerUpdates(dispatch, matchPath, "playerOne", userPlayerNumber);
	listenForPlayerUpdates(dispatch, matchPath, "playerTwo", userPlayerNumber);
	listenForPlayerUpdates(dispatch, matchPath, "playerThree", userPlayerNumber);
	listenForTrash(dispatch, matchPath);
	listenForTurnCount(dispatch, matchPath);
}


function listenForPlayArea(dispatch, matchPath) {
	database.ref(matchPath+'/playArea').on("value", snapshot => {
		let playArea= [];
	    snapshot.forEach(function(childSnapshot) {
	      playArea.push(childSnapshot.val());
		});
		console.log("new play area is: "+JSON.stringify(playArea));
		dispatch(fromMatch.updatePlayArea(playArea));
	});
}

function listenForPlayerUpdates(dispatch, matchPath, playerNumber, userPlayerNumber) {
	database.ref(matchPath+'/'+playerNumber).on("value", snapshot => {
		console.log("Update for player "+playerNumber+" visile for "+userPlayerNumber);
		const user= snapshot.child('user').val();
		const color= snapshot.child('color').val();
		const counts= snapshot.child('counters');
		const counters= {
			plenty: counts.child('plenty').val(),
			coin: counts.child('coin').val(),
			plant: counts.child('plant').val(),
			harvest: counts.child('harvest').val(),
			scrap: counts.child('scrap').val(),
			marketScrap: counts.child('marketScrap').val()
		}
		let activatedFactions= [];
		snapshot.child('activatedFactions').forEach(function(childSnapshot) {
			activatedFactions.push(childSnapshot.val());
		});
		let deck= [];
		snapshot.child('deck').forEach(function(childSnapshot) {
			deck.push(childSnapshot.val());
		});
		let discard= [];
		snapshot.child('discard').forEach(function(childSnapshot) {
			discard.push(childSnapshot.val());
		});
		let fields= [];
		snapshot.child('fields').forEach(function(childSnapshot) {
			let crops= [];
			childSnapshot.child('crops').forEach(function(grandchildSnapshot) {
				crops.push(grandchildSnapshot.val());
			});
			fields.push({id: childSnapshot.child('id').val(), crops: crops, available: childSnapshot.child('available').val()})
		});
		let hand= [];
		snapshot.child('hand').forEach(function(childSnapshot) {
			hand.push(childSnapshot.val());
		});

			//if this is the player, look for a current attack and display it
		if(userPlayerNumber === playerNumber) {
			const attack= snapshot.child('attack').val();
			console.log("The retrieved attack is: "+attack);
			if(attack !== null) {
				let title= "";
				let parentInfo= null;
				let options= [];

				if(attack.discard !== null) {
					console.log("Player "+playerNumber+" has to discard! "+attack);
					title= "Discard! You have been attacked and must discard! ("+attack.discard+" remaining)";
					parentInfo= attack;
					for(var i=0; i<hand.length; i++) {
						options.push({id: hand[i], title: cardMap[hand[i]].title});
					}
					if(hand.length===0) {
						console.log("NOTHING TO DISCARD! OH NO!");
					}
				}
				dispatch(fromMatch.openChoiceModal(options, parentInfo, true, title));
				removeFromDatabase(matchPath+'/'+playerNumber+'/attack');
			}
		}

		const player= {user: user, color: color, activatedFactions: activatedFactions, counters: counters, deck: deck, discard: discard, fields: fields, hand: hand};
		if(playerNumber==="playerOne") {
			dispatch(fromMatch.savePlayerOne(player));
		}
		else if(playerNumber==="playerTwo") {
			dispatch(fromMatch.savePlayerTwo(player));
		}
		else {
			dispatch(fromMatch.savePlayerThree(player));
		}
	});
}

function listenForTrash(dispatch, matchPath) {
	database.ref(matchPath+'/trashPile').on("value", snapshot => {
		let trashArray= [];
	    snapshot.forEach(function(childSnapshot) {
	      trashArray.push(childSnapshot.val());
		});
		console.log("new trash array is: "+JSON.stringify(trashArray));
		dispatch(fromMatch.saveTrashArray(trashArray));
	});
}

function listenForTurnCount(dispatch, matchPath) {
	database.ref(matchPath+'/turnCount').on("value", snapshot => {
		dispatch(fromMatch.updateTurnCount(snapshot.val()));
	})
}