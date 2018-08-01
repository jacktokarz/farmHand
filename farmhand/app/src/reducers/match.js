import {fromMatch} from '../actions'
import {} from '../utils'

const initState= 
	{
		cardModalActions: [],
		cardModalVis: "none",
		cardModalId: 0,
		handSize: 5,
		market: [1,2,3,4,5,6],
		userHand: [11, 15, 28, 7, 3],
	};

export default (state=initState, action) => {
	switch(action.type) {
		case fromMatch.actionTypes.OPENCARDMODAL:
			return {...state, 
				cardModalId: action.payload,
				cardModalVis: "block",
			};
	}
	return state;
}