import { fromText } from '../actions'


const initState= {text: "", dbText: ""};

export default (state= initState, action) => {
	switch(action.type) {
		case fromText.actionTypes.SET:
			return {...state, text: action.payload};
		case fromText.actionTypes.SAVE:
			return {...state, dbText: action.payload};
	}
	return state;
}