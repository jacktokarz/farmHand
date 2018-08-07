import React from 'react'
import { connect } from 'react-redux'
import { 
	getMarketArray, 
	getMatchPlayers, 
	getNextPlayerDeck, 
	getNextPlayerDiscard, 
	getNextPlayerHand, 
	getNextPlayerUser, 
	getPreviousPlayerDeck, 
	getPreviousPlayerDiscard, 
	getPreviousPlayerHand, 
	getPreviousPlayerUser, 
	getUserDeck, 
	getUserDiscard, 
	getUserHand, 
	getUser, 
	getUserPlayerNumber, 
} from '../selectors'
import {fromMatch} from '../actions'
import {Match} from '../components'
import {endTurn, getCookie, matchMount} from '../utils'


const mapStateToProps= state => ({
	marketArray: getMarketArray(state),
	nextPlayerDeck: getNextPlayerDeck(state),
	nextPlayerDiscard: getNextPlayerDiscard(state),
	nextPlayerHand: getNextPlayerHand(state),
	nextPlayerUser: getNextPlayerUser(state),
	previousPlayerDeck: getPreviousPlayerDeck(state),
	previousPlayerDiscard: getPreviousPlayerDiscard(state),
	previousPlayerHand: getPreviousPlayerHand(state),
	previousPlayerUser: getPreviousPlayerUser(state),
	userDeck: getUserDeck(state),
	userDiscard: getUserDiscard(state),
	userHand: getUserHand(state),
	user: getUser(state),
	players: getMatchPlayers(state),
	userPlayerNumber: getUserPlayerNumber(state),
})

const mapDispatchToProps= dispatch => {
	matchMount(dispatch);
	return {
		endTurn: (playerNumber, deck, discard, hand) => { endTurn(playerNumber, dispatch, deck, discard, hand) },
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Match)