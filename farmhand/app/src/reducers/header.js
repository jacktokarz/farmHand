import { fromHeader } from '../actions'


const initState= {buttonText: "Log In"};

export default (state= initState, action) => {
	switch(action.type) {
		case fromHeader.actionTypes.SIGNINTOGGLE:
			return {...state,
				buttonText: action.payload,
			};
	}
	return state;
}