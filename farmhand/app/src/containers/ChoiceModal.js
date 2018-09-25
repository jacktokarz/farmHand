import React from 'react'
import { connect } from 'react-redux'
import {fromMatch}  from '../actions'
import {
	getCardModalId,
	getChoiceModalOptions,
	getChoiceModalTitle,
	getChoiceModalParentInfo,
	getChoiceModalRequired,
	getChoiceModalVis,
	getCommunityField,
	getMarketArray,
	getMatchPath,
	getPlayArea,
	getPlayerOne,
	getPlayerTwo,
	getPlayerThree,
	getTrashArray,
	getUserPlayerNumber,
} from '../selectors'
import {ChoiceModal} from '../components'
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
		cardModalId: getCardModalId(state),
		communityField: getCommunityField(state),
		marketArray: getMarketArray(state),
		matchPath: getMatchPath(state),
		options: getChoiceModalOptions(state),
		parentInfo: getChoiceModalParentInfo(state),
		playArea: getPlayArea(state),
		required: getChoiceModalRequired(state),
		title: getChoiceModalTitle(state),
		trashArray: getTrashArray(state),
		user: user,
		userPlayerNumber: userPlayerNumber,
		vis: getChoiceModalVis(state),
	}
}

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeChoiceModal()),
	func: (option, cardModalId, communityField, marketArray, matchPath, parentInfo, playArea, actionTitle, trashArray, user, userPlayerNumber) =>
		modalAction(option, parentInfo, actionTitle, cardModalId, communityField, marketArray, matchPath, playArea, trashArray, user, userPlayerNumber, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(ChoiceModal)