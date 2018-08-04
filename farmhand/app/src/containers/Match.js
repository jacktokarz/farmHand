import React from 'react'
import { connect } from 'react-redux'
import {getCardModalActions, getCardModalData, getCardModalVis, getHandSize, getMarketArray, getMatchPlayers, getPlayerOneDeck, getPlayerOneDiscard, getPlayerOneHand, getPlayerOneUser, getPlayerTwoDeck, getPlayerTwoDiscard, getPlayerTwoHand, getPlayerTwoUser, getPlayerThreeDeck, getPlayerThreeDiscard, getPlayerThreeHand, getPlayerThreeUser, getUserPlayerNumber, getUserHandArray} from '../selectors'
import {fromMatch} from '../actions'
import {Match} from '../components'
import {endTurn, getCookie, listenForMatchUpdates} from '../utils'


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
	playerTwoDeck: getPlayerTwoDeck(state),
	playerTwoDiscard: getPlayerTwoDiscard(state),
	playerTwoHand: getPlayerTwoHand(state),
	playerTwoUser: getPlayerTwoUser(state),
	playerThreeDeck: getPlayerThreeDeck(state),
	playerThreeDiscard: getPlayerThreeDiscard(state),
	playerThreeHand: getPlayerThreeHand(state),
	playerThreeUser: getPlayerThreeUser(state),
	userHandArray: getUserHandArray(state),
	players: getMatchPlayers(state),
	user: getCookie("user"),
	userPlayerNumber: getUserPlayerNumber(state),
})

const mapDispatchToProps= dispatch => {
	listenForMatchUpdates(dispatch);
	return {
		closeModal: () => dispatch(fromMatch.closeCardModal()),
		endTurn: (deck, discard, hand) => { endTurn(dispatch, deck, discard, hand) },
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Match)