import { connect } from 'react-redux'
import {fromMatch}  from '../actions'
import {Lobby} from '../components'
import {getMatches, getUser} from '../selectors'
import {cardMap, communityFields, createMatch, joinMatch, playMatch, startMatch} from '../utils'


const mapStateToProps= state => { console.log("matches are: "+getMatches(state)); return (
	{
		matches: getMatches(state),
		user: getUser(state),
	}
)}

const mapDispatchToProps= dispatch => ({
	createMatch: (user) => {
		let options= [];
		for(var i= 0; i < communityFields.length; i++) {
			options.push({id: communityFields[i], title: cardMap[communityFields[i]].title});
		}
		const parentInfo= user;
		const title= "Share which community field in this match?";
		console.log("Opening choice modal with options: "+JSON.stringify(options));
		dispatch(fromMatch.openChoiceModal(options, parentInfo, false, title));
	},
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
	      joinMatch(dispatch, item.key, item.playerList, user);
	    }
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)