import React from 'react'
import { connect } from 'react-redux'
import {getCardModalActions, getCardModalData, getCardModalVis, getHandSize, getMarketArray, getMatchPlayers, getPlayerOneDeck, getPlayerOneDiscard, getPlayerOneHand, getPlayerOneUser, getThisPlayer, getUserHandArray} from '../selectors'
import {fromMatch} from '../actions'
import {Match} from '../components'
import {endTurn, listenForMatchUpdates} from '../utils'


const mapStateToProps= state => ({
	cardModalActions: getCardModalActions(state),
	cardModalData: getCardModalData(state),
	cardModalVis: getCardModalVis(state),
	handSize: getHandSize(state),
	marketArray: getMarketArray(state),
	playerOneDeck: getPlayerOneDeck(state),
	playerOneDiscard: getPlayerOneDiscard(state),
	playerOneHand: getPlayerOneHand(state),
	playerOneUser: getPlayerOneUser(state),
	userHandArray: getUserHandArray(state),
	players: getMatchPlayers(state),
	thisPlayer: getThisPlayer(state),
})

const mapDispatchToProps= dispatch => {
	listenForMatchUpdates(dispatch);
	return {
		closeModal: () => dispatch(fromMatch.closeCardModal()),
		endTurn: (deck, discard, hand) => { dispatch(fromMatch.discardHand(discard, hand)); dispatch(fromMatch.drawHand(deck, discard, hand)) },
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Match)