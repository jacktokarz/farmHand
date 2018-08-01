import { connect } from 'react-redux'
import {Lobby} from '../components'
import {getMatches} from '../selectors'
import {createMatch, joinMatch, setCookie, startMatch} from '../utils'


const mapStateToProps= state => { console.log("matches are: "+getMatches(state)); return (
	{
		matches: getMatches(state),
	}
)}

const mapDispatchToProps= dispatch => ({
	createMatch: () => { createMatch(); },
	entryAction: (item, history) => {
		if(item.actionLabel === "Play Match") {
	    	setCookie("match", item.key);
	    	history.push('/match');
	    }
	    else if(item.actionLabel === "Start Match") {
	    	startMatch(item.key);
	    	history.push('/match');
	    }
	    else if(item.actionLabel === "Join Match") {
	      joinMatch(item.key, item.playerList);
	    }
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)