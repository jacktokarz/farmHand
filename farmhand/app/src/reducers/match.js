import {fromMatch} from '../actions'
import {getMatchMarketArray, shuffleArray, oneStartingHandMap} from '../utils'


const initState= 
	{
		cardModalActions: ["Example"],
		cardModalVis: "none",
		cardModalData: {},
		cardModalId: 0,
		marketArray: [0,0,0,0,0,0],
		matchPlayers: [],
		nextPlayerDeck: [0,0],
		nextPlayerDiscard: [],
		nextPlayerHand: [0,0,0,0,0],
		nextPlayerUser: "",
		previousPlayerDeck: [0,0],
		previousPlayerDiscard: [],
		previousPlayerHand: [0,0,0,0,0],
		previousPlayerUser: "",
		userDeck: [0,0],
		userDiscard: [],
		userHand: [0,0,0,0,0],
		user: "",
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
			return {...state, 
				marketArray: action.payload,
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
		case fromMatch.actionTypes.SAVENEXTPLAYERUSER:
			return {...state, 
				nextPlayerUser: action.payload,
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
		case fromMatch.actionTypes.SAVEPREVIOUSPLAYERUSER:
			return {...state, 
				previousPlayerUser: action.payload,
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
		case fromMatch.actionTypes.SAVEUSER:
			return {...state, 
				user: action.payload,
			};
		case fromMatch.actionTypes.SAVEUSERPLAYERNUMBER:
			console.log("saving user player number as: "+action.payload);
			return {...state,
				userPlayerNumber: action.payload,
			};

	}
	return state;
}