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
	getMatchLog,
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
	let totalCrops= 0;
	const p1= getPlayerOne(state);
	const p2= getPlayerTwo(state);
	const p3= getPlayerThree(state);
	for(var i=0; i<(p1.fields!==undefined ? p1.fields.length : 0);i++) {
		totalCrops+=(p1.fields[i].crops!==undefined ? p1.fields[i].crops.length : 0);
	}
	for(var i=0; i<(p2.fields!==undefined ? p2.fields.length : 0);i++) {
		totalCrops+=(p2.fields[i].crops!==undefined ? p2.fields[i].crops.length : 0);
	}
	if(p3!==undefined) {
		for(var i=0; i<(p3.fields!==undefined ? p3.fields.length : 0);i++) {
			totalCrops+=(p3.fields[i].crops!==undefined ? p3.fields[i].crops.length : 0);
		}
	}
	const userPlayerNumber= getUserPlayerNumber(state);
	let user= {};
	if(userPlayerNumber===0) {
		user= p1;
	}
	else if(userPlayerNumber===1) {
		user= p2;
	}
	else {
		user= p3;
	}
	return {
		cardModalId: getCardModalId(state),
		communityField: getCommunityField(state),
		logLength: getMatchLog(state)===null?0:getMatchLog(state).length,
		marketArray: getMarketArray(state),
		matchPath: getMatchPath(state),
		options: getChoiceModalOptions(state),
		parentInfo: getChoiceModalParentInfo(state),
		playArea: getPlayArea(state),
		required: getChoiceModalRequired(state),
		title: getChoiceModalTitle(state),
		totalCrops: totalCrops,
		trashArray: getTrashArray(state),
		user: user,
		userPlayerNumber: userPlayerNumber,
		vis: getChoiceModalVis(state),
	}
}

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeChoiceModal()),
	func: (option, cardModalId, communityField, logLength, marketArray, matchPath, parentInfo, playArea, actionTitle, totalCrops, trashArray, user, userPlayerNumber, history) =>
		modalAction(option, parentInfo, actionTitle, cardModalId, communityField, logLength, marketArray, matchPath, playArea, totalCrops, trashArray, user, userPlayerNumber, dispatch, history),
})


export default connect(mapStateToProps, mapDispatchToProps)(ChoiceModal)