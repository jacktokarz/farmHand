import React from 'react'
import { connect } from 'react-redux'
import {fromMatch}  from '../actions'
import {
	getCardModalId,
	getChoiceModalOptions,
	getChoiceModalTitle,
	getChoiceModalParentInfo,
	getChoiceModalVis,
	getMarketArray,
	getMatchPath,
	getPlayArea,
	getPlayerOne,
	getPlayerTwo,
	getPlayerThree,
	getUserPlayerNumber,
} from '../selectors'
import {ChoiceModal} from '../components'
import {buyField, cardMap, chooseOption, harvestCrop, playCard, plantCard} from '../utils'


const mapStateToProps= (state) => { console.log("choice modal: "+getChoiceModalOptions(state));
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
		marketArray: getMarketArray(state),
		matchPath: getMatchPath(state),
		options: getChoiceModalOptions(state),
		parentInfo: getChoiceModalParentInfo(state),
		playArea: getPlayArea(state),
		title: getChoiceModalTitle(state),
		user: user,
		userPlayerNumber: userPlayerNumber,
		vis: getChoiceModalVis(state),
	}
}

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeChoiceModal()),
	func: (option, cardModalId, marketArray, matchPath, parentInfo, playArea, title, user, playerNumber) => {
		console.log("Option selected! "+JSON.stringify(parentInfo));
		if(title.startsWith("Play")) {
		    let cardData= cardMap[option.id];
		    if(option.title==="left") {
		    	cardData= cardData.primary.or.left;
		    }
		    else {
		    	cardData= cardData.primary.or.right;
		    }
		    playCard(cardData, option.id, matchPath, playArea, playerNumber, user);
		}
		else if(title.startsWith("Plant")) {
			let field= user.fields[0];
			if(field.id !== option.id) {
				field= user.fields[1];
			}
		    plantCard(parentInfo, field, matchPath, user.counters.plant, playerNumber, user);
		}
		else if(title.startsWith("Harvest")) {
			harvestCrop(option.id, parentInfo, matchPath, playArea, playerNumber, user);
		}
		else if(title.startsWith("Replace")) {
			buyField(parentInfo, marketArray, matchPath, user.counters.coin - cardMap[option.id].cost, option.id, playerNumber)
		}
		dispatch(fromMatch.closeChoiceModal());
		dispatch(fromMatch.closeCardModal());
	},
})


export default connect(mapStateToProps, mapDispatchToProps)(ChoiceModal)