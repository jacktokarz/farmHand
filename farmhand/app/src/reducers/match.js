import {fromMatch} from '../actions'
import {getMatchMarketArray, shuffleArray, oneStartingHandMap} from '../utils'


const initState= 
	{
		cardModalActions: [],
		cardModalVis: "none",
		cardModalData: {},
		handSize: 5,
		marketArray: [0,0,0,0,0,0],
		matchPlayers: [],
		playerOneDeck: [0,0],
		playerOneDiscard: [],
		playerOneHand: [0,0,0,0,0],
		playerOneUser: "",
		playerTwoDeck: [0,0],
		playerTwoDiscard: [],
		playerTwoHand: [0,0,0,0,0],
		playerTwoUser: "",
		playerThreeDeck: [0,0],
		playerThreeDiscard: [],
		playerThreeHand: [0,0,0,0,0],
		playerThreeUser: "",
		userDeckArray: [],
		userHandArray: [0,0,0,0,0,0],
		userPlayerNumber: "",
	};

export default (state=initState, action) => {
	switch(action.type) {
		case fromMatch.actionTypes.CLOSECARDMODAL:
			return {...state, 
				cardModalData: {},
				cardModalVis: "none",
			};
		case fromMatch.actionTypes.DISCARDHAND:
			console.log("discard action: "+JSON.stringify(action));
			return {...state,
				playerOneDiscard: action.discard,
				playerOneHand: action.hand,
			};
		case fromMatch.actionTypes.DRAWHAND:
			console.log("draw action: "+JSON.stringify(action));
			return {...state,
				playerOneDeck: action.deck,
				playerOneDiscard: action.discard,
				playerOneHand: action.hand,
			};
		case fromMatch.actionTypes.OPENCARDMODAL:
			return {...state, 
				cardModalData: action.payload,
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
		case fromMatch.actionTypes.SAVEPLAYERONEDECK:
			console.log("updating player one deck with: "+action.payload);
			return {...state, 
				playerOneDeck: action.payload,
			};
		case fromMatch.actionTypes.SAVEPLAYERONEDISCARD:
			return {...state, 
				playerOneDiscard: action.payload,
			};
		case fromMatch.actionTypes.SAVEPLAYERONEHAND:
			console.log("playerOne hand update: "+action.payload);
			return {...state, 
				playerOneHand: action.payload,
			};
		case fromMatch.actionTypes.SAVEPLAYERONEUSER:
			return {...state, 
				playerOneUser: action.payload,
			};
		case fromMatch.actionTypes.SAVEPLAYERTWODECK:
			console.log("updating player Two deck with: "+action.payload);
			return {...state, 
				playerTwoDeck: action.payload,
			};
		case fromMatch.actionTypes.SAVEPLAYERTWODISCARD:
			return {...state, 
				playerTwoDiscard: action.payload,
			};
		case fromMatch.actionTypes.SAVEPLAYERTWOHAND:
			console.log("playerTwo hand update: "+action.payload);
			return {...state, 
				playerTwoHand: action.payload,
			};
		case fromMatch.actionTypes.SAVEPLAYERTWOUSER:
			return {...state, 
				playerTwoUser: action.payload,
			};
		case fromMatch.actionTypes.SAVEPLAYERTHREEDECK:
			console.log("updating player Three deck with: "+action.payload);
			return {...state, 
				playerThreeDeck: action.payload,
			};
		case fromMatch.actionTypes.SAVEPLAYERTHREEDISCARD:
			return {...state, 
				playerThreeDiscard: action.payload,
			};
		case fromMatch.actionTypes.SAVEPLAYERTHREEHAND:
			console.log("playerThree hand update: "+action.payload);
			return {...state, 
				playerThreeHand: action.payload,
			};
		case fromMatch.actionTypes.SAVEPLAYERTHREEUSER:
			return {...state, 
				playerThreeUser: action.payload,
			};
		case fromMatch.actionTypes.SAVEUSERPLAYERNUMBER:
			console.log("saving user player number as: "+action.payload);
			return {...state,
				userPlayerNumber: action.payload,
			};

	}
	return state;
}