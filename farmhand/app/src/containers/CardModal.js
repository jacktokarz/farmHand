import React from 'react'
import { connect } from 'react-redux'
import {fromMatch}  from '../actions'
import { 
	getCardModalActions, 
	getCardModalData, 
	getCardModalId, 
	getCardModalVis, 
	getCurrentPlayer, 
	getMarketArray, 
	getMatchPath, 
	getPlayArea, 
	getUserCounters, 
	getUserDiscard, 
	getUserPlayerNumber 
} from '../selectors'
import {CardModal} from '../components'
import {buyMarketCard, playCard} from '../utils'


const mapStateToProps= (state) => (
	{
		actions: getCardModalActions(state),
		currentPlayer: getCurrentPlayer(state),
		data: getCardModalData(state),
		userPlayerNumber: getUserPlayerNumber(state),
		vis: getCardModalVis(state),
		func: (title) => {
			console.log("pop happening");
			if(title === "Buy") {
				buyMarketCard(getUserDiscard(state), getCardModalId(state), getMarketArray(state), getMatchPath(state), getUserPlayerNumber(state));
			}
			else {
				if(title === "Play") {
					playCard(getCardModalId(state), getMatchPath(state), getUserPlayerNumber(state), getUserCounters(state), getPlayArea(state));
				}
			}
		}
	}
)

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeCardModal()),
})


export default connect(mapStateToProps, mapDispatchToProps)(CardModal)