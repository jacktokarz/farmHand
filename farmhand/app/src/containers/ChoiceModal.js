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
	getMarketArray,
	getMatchPath,
	getPlayArea,
	getPlayerOne,
	getPlayerTwo,
	getPlayerThree,
	getUserPlayerNumber,
} from '../selectors'
import {ChoiceModal} from '../components'
import {buyField, cardMap, combineCounters, convertPlayerNumberToWord, discardCard, insertObject, isThereADefaultChoice, harvestCrop, playCard, plantCard} from '../utils'


const mapStateToProps= (state) => { console.log("choice modal: "+JSON.stringify(getChoiceModalOptions(state)));
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
		required: getChoiceModalRequired(state),
		title: getChoiceModalTitle(state),
		user: user,
		userPlayerNumber: userPlayerNumber,
		vis: getChoiceModalVis(state),
	}
}

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeChoiceModal()),
	func: (option, cardModalId, marketArray, matchPath, parentInfo, playArea, title, user, playerNumber) => {
		const playerWord= convertPlayerNumberToWord(playerNumber);
		console.log("Option selected! "+JSON.stringify(parentInfo));
		if(title.startsWith("Play")) {
		    let cardData= cardMap[option.id];
		    let areaData= null;
		    if(option.title==="left") {
		    	areaData= cardData.primary.or.left;
		    }
		    else {
		    	areaData= cardData.primary.or.right;
		    }
			user.activatedFactions= user.activatedFactions===undefined?[]:user.activatedFactions;
			if(user.activatedFactions.includes(cardData.faction) && cardData.type==="tool") {
				areaData= combineCounters(areaData, cardData.secondary);
			}
		    playCard(areaData, user.counters, dispatch, option.id, matchPath, playArea, playerWord, user);
			dispatch(fromMatch.closeChoiceModal());
			dispatch(fromMatch.closeCardModal());
		}
		else {
			if(title.startsWith("Plant")) {
				let field= user.fields[0];
				if(field.id !== option.id) {
					field= user.fields[1];
				}
			    plantCard(parentInfo, field, matchPath, user.counters.plant, playerWord, user);
			}
			else if(title.startsWith("Harvest")) {
				harvestCrop(option.id, dispatch, parentInfo, matchPath, playArea, playerWord, user);
			}
			else if(title.startsWith("Replace")) {
				buyField(parentInfo, marketArray, matchPath, user.counters.coin - cardMap[option.id].cost, option.id, playerWord)
			}
			else if(title.startsWith("Discard")) {
				user.discard.push(option.id);
				insertObject(matchPath+'/'+playerWord+'/discard', user.discard);
				user.hand.splice(user.hand.indexOf(option.id), 1);
				insertObject(matchPath+'/'+playerWord+'/hand', user.hand);
			}
			dispatch(fromMatch.closeChoiceModal());
			dispatch(fromMatch.closeCardModal());
		}
	},
})


export default connect(mapStateToProps, mapDispatchToProps)(ChoiceModal)