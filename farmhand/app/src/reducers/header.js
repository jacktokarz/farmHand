import { fromHeader } from '../actions'


const initState= {greeting: "", headerButtonAction: "", headerButtonText: ""};

export default (state= initState, action) => {
	switch(action.type) {
		case fromText.actionTypes.SIGNIN:
			return {...state, greeting: action.payload.greeting, 
				headerButtonAction: action.payload.headerButtonAction,
				headerButtonText: action.payload.headerButtonText
			};
	}
	return state;
}