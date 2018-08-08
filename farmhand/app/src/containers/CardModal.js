import React from 'react'
import { connect } from 'react-redux'
import {fromMatch}  from '../actions'
import { getCardModalActions, getCardModalData, getCardModalId, getCardModalVis, getMarketArray, getMatchPath, getUserCounters, getUserDiscard, getUserHand, getUserPlayerNumber } from '../selectors'
import {CardModal} from '../components'
import {buyMarketCard} from '../utils'


const mapStateToProps= (state) => (
	{
		actions: getCardModalActions(state),
		data: getCardModalData(state),
		vis: getCardModalVis(state),
		func: (title) => {
			console.log("pop happening");
			if(title === "Buy") {
				buyMarketCard(getUserDiscard(state), getCardModalId(state), getMarketArray(state), getMatchPath(state), getUserPlayerNumber(state));
			}
			else {
				if(title === "Play") {
					playCard(getCardModalId(state), getMatchPath(state), getUserPlayerNumber(state), getUserHand(state), getUserCounters(state));
				}
			}
		}
	}
)

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeCardModal()),
})


export default connect(mapStateToProps, mapDispatchToProps)(CardModal)