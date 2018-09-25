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
	getTrashArray,
	getUserPlayerNumber 
} from '../selectors'
import {CardModal} from '../components'
import {modalAction} from '../utils'


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
		cardId: getCardModalId(state),
		currentPlayerNumber: getCurrentPlayerNumber(state),
		data: getCardModalData(state),
		marketArray: getMarketArray(state),
		matchPath: getMatchPath(state),
		playArea: getPlayArea(state),
		trashArray: getTrashArray(state),
		user: user,
		userPlayerNumber: userPlayerNumber,
		vis: getCardModalVis(state),
	}
}

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeCardModal()),
	func: (actionTitle, cardId, marketArray, matchPath, playArea, trashArray, user, userPlayerNumber) => {
		console.log("Card Modal container");
		modalAction(null, null, actionTitle, cardId, marketArray, matchPath, playArea, trashArray, user, userPlayerNumber, dispatch); 
	},
})


export default connect(mapStateToProps, mapDispatchToProps)(CardModal)