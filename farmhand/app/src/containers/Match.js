import React from 'react'
import { connect } from 'react-redux'
import { 
	getCurrentPlayer,
	getMarketArray,
	getMatchPath,
	getMatchPlayers,
	getNextPlayerDeck, 
	getNextPlayerDiscard, 
	getNextPlayerHand, 
	getNextPlayer,
	getPreviousPlayerDeck, 
	getPreviousPlayerDiscard, 
	getPreviousPlayerHand, 
	getPreviousPlayer,
	getUserColor,
	getUserCounters,
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
	currentPlayer: getCurrentPlayer(state),
	marketArray: getMarketArray(state),
	matchPath: getMatchPath(state),
	matchPlayers: getMatchPlayers(state),
	nextPlayerDeck: getNextPlayerDeck(state),
	nextPlayerDiscard: getNextPlayerDiscard(state),
	nextPlayerHand: getNextPlayerHand(state),
	nextPlayer: getNextPlayer(state),
	previousPlayerDeck: getPreviousPlayerDeck(state),
	previousPlayerDiscard: getPreviousPlayerDiscard(state),
	previousPlayerHand: getPreviousPlayerHand(state),
	previousPlayer: getPreviousPlayer(state),
	userColor: getUserColor(state),
	userCounters: getUserCounters(state),
	userDeck: getUserDeck(state),
	userDiscard: getUserDiscard(state),
	userHand: getUserHand(state),
	user: getUser(state),
	userPlayerNumber: getUserPlayerNumber(state),
})

const mapDispatchToProps= dispatch => {
	matchMount(dispatch);
	return {
		endTurn: (currentPlayer, deck, discard, hand, matchPath, numberOfPlayers, playerNumber) => { endTurn(currentPlayer, deck, discard, hand, matchPath, numberOfPlayers, playerNumber) },
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Match)