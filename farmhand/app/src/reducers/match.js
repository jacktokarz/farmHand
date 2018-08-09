import {fromMatch} from '../actions'
import {} from '../utils'


const initState= 
	{
		cardModalActions: ["Example"],
		cardModalVis: "none",
		cardModalData: {},
		cardModalId: 0,
		currentPlayer: "playerOne",
		marketArray: [0,0,0,0,0,0],
		matchPath: "/matches/0",
		matchPlayers: [],
		nextPlayerDeck: [0,0],
		nextPlayerDiscard: [],
		nextPlayerHand: [0,0,0,0,0],
		nextPlayer: {color: "grey", user: "", playerNumber: ""},
		playArea: [],
		previousPlayerDeck: [0,0],
		previousPlayerDiscard: [],
		previousPlayerHand: [0,0,0,0,0],
		previousPlayer: {color: "grey", user: "", playerNumber: ""},
		userColor: "grey",
		userCounters: {plenty: 0, coin: 0, plant: 0, harvest: 0, scrap: 0, marketScrap: 0},
		userDeck: [0,0],
		userDiscard: [],
		userHand: [0,0,0,0,0],
		userPlayerNumber: "",
	};

export default (state=initState, action) => {
	switch(action.type) {
		case fromMatch.actionTypes.CLOSECARDMODAL:
			return {...state,
				cardModalVis: "none",
			};
		case fromMatch.actionTypes.DISCARDHAND:
			console.log("discard action: "+JSON.stringify(action));
			return {...state,
				userDiscard: action.discard,
				userHand: action.hand,
			};
		case fromMatch.actionTypes.DRAWHAND:
			console.log("draw action: "+JSON.stringify(action));
			return {...state,
				userDeck: action.deck,
				userDiscard: action.discard,
				userHand: action.hand,
			};
		case fromMatch.actionTypes.OPENCARDMODAL:
			return {...state, 
				cardModalActions: action.actions,
				cardModalData: action.data,
				cardModalId: action.id,
				cardModalVis: "block",
			};
		case fromMatch.actionTypes.SAVEMARKETARRAY:
			console.log("updating market array with: "+action.payload.toString());
			return {...state, 
				marketArray: action.payload,
			};
		case fromMatch.actionTypes.SAVEMATCHPATH:
			return {...state, 
				matchPath: action.payload,
			};
		case fromMatch.actionTypes.SAVEMATCHPLAYERS:
			return {...state,
				matchPlayers: action.payload,
			};
		case fromMatch.actionTypes.SAVENEXTPLAYERDECK:
			console.log("updating player Two deck with: "+action.payload);
			return {...state, 
				nextPlayerDeck: action.payload,
			};
		case fromMatch.actionTypes.SAVENEXTPLAYERDISCARD:
			return {...state, 
				nextPlayerDiscard: action.payload,
			};
		case fromMatch.actionTypes.SAVENEXTPLAYERHAND:
			console.log("reducer, nextPlayer hand: "+action.payload);
			return {...state, 
				nextPlayerHand: action.payload,
			};
		case fromMatch.actionTypes.SAVENEXTPLAYER:
			return {...state, 
				nextPlayer: {color: action.color, user: action.user, playerNumber: action.playerNumber},
			};
		case fromMatch.actionTypes.SAVEPREVIOUSPLAYERDECK:
			return {...state, 
				previousPlayerDeck: action.payload,
			};
		case fromMatch.actionTypes.SAVEPREVIOUSPLAYERDISCARD:
			return {...state, 
				previousPlayerDiscard: action.payload,
			};
		case fromMatch.actionTypes.SAVEPREVIOUSPLAYERHAND:
			console.log("reducer, previousPlayer hand: "+action.payload);
			return {...state, 
				previousPlayerHand: action.payload,
			};
		case fromMatch.actionTypes.SAVEPREVIOUSPLAYER:
			return {...state, 
				previousPlayer: {color: action.color, user: action.user, playerNumber: action.playerNumber},
			};
		case fromMatch.actionTypes.SAVEUSERCOLOR:
			return {...state, 
				userColor: action.payload,
			};
		case fromMatch.actionTypes.SAVEUSERCOUNTERS:
			return {...state, 
				userCounters: action.payload,
			};
		case fromMatch.actionTypes.SAVEUSERDECK:
			return {...state, 
				userDeck: action.payload,
			};
		case fromMatch.actionTypes.SAVEUSERDISCARD:
			return {...state, 
				userDiscard: action.payload,
			};
		case fromMatch.actionTypes.SAVEUSERHAND:
			console.log("reducer, USER hand update: "+action.payload);
			return {...state, 
				userHand: action.payload,
			};
		case fromMatch.actionTypes.SAVEUSERPLAYERNUMBER:
			console.log("saving user player number as: "+action.payload);
			return {...state,
				userPlayerNumber: action.payload,
			};
		case fromMatch.actionTypes.UPDATECURRENTPLAYER:
			return {...state,
				currentPlayer: action.payload,
			};
		case fromMatch.actionTypes.UPDATEPLAYAREA:
			return {...state,
				playArea: action.payload,
			};
	}
	return state;
}