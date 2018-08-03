import {fromMatch} from '../actions'
import {getMatchMarketArray, shuffleArray, oneStartingHandMap} from '../utils'


const initState= 
	{
		cardModalActions: [],
		cardModalVis: "none",
		cardModalData: {},
		handSize: 5,
		marketArray: [0,0,0,0,0,0],
		userHandArray: [0,0,0,0,0,0],
	};

export default (state=initState, action) => {
	switch(action.type) {
		case fromMatch.actionTypes.OPENCARDMODAL:
			return {...state, 
				cardModalData: action.payload,
				cardModalVis: "block",
			};
		case fromMatch.actionTypes.CLOSECARDMODAL:
			return {...state, 
				cardModalData: {},
				cardModalVis: "none",
			};
		case fromMatch.actionTypes.SAVEMARKETARRAY:
			return {...state, 
				marketArray: action.payload,
			};

	}
	return state;
}