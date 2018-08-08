import { connect } from 'react-redux'
import {Lobby} from '../components'
import {getMatches, getUser} from '../selectors'
import {createMatch, joinMatch, playMatch, startMatch} from '../utils'


const mapStateToProps= state => { console.log("matches are: "+getMatches(state)); return (
	{
		matches: getMatches(state),
		user: getUser(state),
	}
)}

const mapDispatchToProps= dispatch => ({
	createMatch: (user) => { createMatch(user); },
	entryAction: (item, history, user) => {
		if(item.actionLabel === "Play Match") {
	    	playMatch(item.key, dispatch);
	    	history.push('/match');
	    }
	    else if(item.actionLabel === "Start Match") {
	    	startMatch(item.key);
	    	playMatch(item.key, dispatch);
	    	history.push('/match');
	    }
	    else if(item.actionLabel === "Join Match") {
	      joinMatch(item.key, item.playerList, user);
	    }
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)