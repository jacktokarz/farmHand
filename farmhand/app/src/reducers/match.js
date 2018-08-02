import {fromMatch} from '../actions'
import {marketArray, shuffleArray, startingHandArray} from '../utils'

const initState= 
	{
		cardModalActions: [],
		cardModalVis: "none",
		cardModalData: {},
		handSize: 5,
		market: shuffleArray(marketArray),
		userHand: shuffleArray(startingHandArray),
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

	}
	return state;
}