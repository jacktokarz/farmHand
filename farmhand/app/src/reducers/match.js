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
		thisPlayer: "",
		userDeckArray: [],
		userHandArray: [0,0,0,0,0,0],
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
				playerOneDiscard: (action.discard === null ? action.hand : (action.discard).concat(action.hand)),
			};
		case fromMatch.actionTypes.DRAWHAND:
			console.log("draw action: "+JSON.stringify(action));
			let newDeck= [];
			if(action.deck.length < 5) {
				while(action.deck.length > 0) {
					action.discard.push(action.deck.pop());
				}
				newDeck= shuffleArray(action.discard);
			}
			else {
				newDeck= action.deck;
			}
			const newHand= [newDeck.pop(), newDeck.pop(), newDeck.pop(), newDeck.pop(), newDeck.pop()];
			return {...state,
				playerOneDeck: newDeck,
				playerOneDiscard: (action.discard),
				playerOneHand: newHand,
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

	}
	return state;
}