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
	getUserPlayerNumber 
} from '../selectors'
import {CardModal} from '../components'
import {askWhichField, buyField, buyMarketCard, playCard} from '../utils'


const mapStateToProps= (state) => {
	const data= getCardModalData(state);
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
		data: data,
		user: user,
		userPlayerNumber: userPlayerNumber,
		vis: getCardModalVis(state),
		func: (actionTitle) => {
			if(actionTitle === "Buy") {
				if(data.type==="field") {
					if(user.fields.length===2) {
						askWhichField();
					}
					else {
						buyField(null, getCardModalId(state), getMatchPath(state), userPlayerNumber);
					}
				}
				else {
					buyMarketCard(user.discard, getCardModalId(state), getMarketArray(state), getMatchPath(state), userPlayerNumber);
				}
			}
			else {
				if(actionTitle === "Play") {
					playCard(getCardModalId(state), getMatchPath(state), userPlayerNumber, user.counters, getPlayArea(state));
				}
			}
		}
	}
}

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeCardModal()),
})


export default connect(mapStateToProps, mapDispatchToProps)(CardModal)