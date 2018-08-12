import React from 'react'
import { connect } from 'react-redux'
import {fromMatch}  from '../actions'
import { 
	getCardModalActions, 
	getCardModalData, 
	getCardModalId, 
	getCardModalVis, 
	getCurrentPlayerNumber, 
	getMarketArray, 
	getMatchPath, 
	getPlayArea, 
	getPlayerOne,
	getPlayerTwo,
	getPlayerThree,
	getUserCounters, 
	getUserDiscard, 
	getUserPlayerNumber 
} from '../selectors'
import {CardModal} from '../components'
import {buyMarketCard, playCard} from '../utils'


const mapStateToProps= (state) => {
	const userPlayerNumber= getUserPlayerNumber(state);
	let user= {};
	if(userPlayerNumber===0) {
		user= getPlayerOne(state);
	}
	else if(userPlayerNumber===1) {
		user= getPlayerTwo(state);
	}
	else {
		user= getPlayerThree(state);
	}
	return {
		actions: getCardModalActions(state),
		currentPlayerNumber: getCurrentPlayerNumber(state),
		data: getCardModalData(state),
		userPlayerNumber: userPlayerNumber,
		vis: getCardModalVis(state),
		func: (title) => {
			if(title === "Buy") {
				buyMarketCard(user.discard, getCardModalId(state), getMarketArray(state), getMatchPath(state), getUserPlayerNumber(state));
			}
			else {
				if(title === "Play") {
					playCard(getCardModalId(state), getMatchPath(state), getUserPlayerNumber(state), user.counters, getPlayArea(state));
				}
			}
		}
	}
}

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeCardModal()),
})


export default connect(mapStateToProps, mapDispatchToProps)(CardModal)