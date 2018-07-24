import { fromLobby } from '../actions'


const initState= {matches: [{playerList: "", actionLabel: "", actionFunction: ""}]};

export default (state= initState, action) => {
	switch(action.type) {
		case fromLobby.actionTypes.SAVE:
			return {...state, matches: action.payload};
	}
	return state;
}