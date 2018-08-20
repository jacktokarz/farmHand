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
import {buyField, buyMarketCard, cardMap, plantCard, playCard, scrapCard, scrapMarketCard} from '../utils'


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
		user: user,
		userPlayerNumber: userPlayerNumber,
		vis: getCardModalVis(state),
	}
}

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeCardModal()),
	func: (actionTitle, cardId, data, marketArray, matchPath, playArea, user, userPlayerNumber) => {
		console.log("Card modal id: "+JSON.stringify(cardId));
		if(actionTitle === "Buy") {
			if(data.type==="field") {
				if(user.fields.length===2) {
					const title= "Replace which field?";
					const parentInfo= cardId;
					const options= [{id: user.fields[0].id, title: cardMap[user.fields[0].id]}, {id: user.fields[1].id, title: cardMap[user.fields[1].id]}];
					dispatch(fromMatch.openChoiceModal(options, parentInfo, title));
				}
				else {
					buyField(null, marketArray, matchPath, user.counters.coin - data.cost, cardId, userPlayerNumber);
					dispatch(fromMatch.closeCardModal());
				}
			}
			else {
				buyMarketCard(cardId, marketArray, matchPath, user.counters.coin - data.cost, userPlayerNumber);
				dispatch(fromMatch.closeCardModal());
			}
		}
		else if(actionTitle === "Play") {
			let activatedArea= cardMap[cardId].primary;
			if(activatedArea.or === undefined) {
				playCard(cardMap[cardId].primary, cardId, matchPath, playArea, userPlayerNumber, user);
				dispatch(fromMatch.closeCardModal());				
			}
			else {
				const title= "Play which side of the 'OR' statement?";
				const parentInfo= cardId;
				const options= [{id: cardId, title: "left"}, {id: cardId, title: "right"}];
				console.log("choice modal called! "+JSON.stringify(options));
				dispatch(fromMatch.openChoiceModal(options, parentInfo, title));
			}
		}
		else if(actionTitle === "Plant") {
			console.log("user data for planting: "+JSON.stringify(user));
			if(user.fields.length === 1) {
				plantCard(cardId, user.fields[0], matchPath, user.counters.plant, userPlayerNumber, user);
				dispatch(fromMatch.closeCardModal());
			}
			else {
				const title= "Plant "+data.title+" in which field?";
				const parentInfo= cardId;
				const options= [{id: user.fields[0].id, title: cardMap[user.fields[0].id].title}, {id: user.fields[1].id, title: cardMap[user.fields[1].id].title}]; 
				console.log("choice modal called! "+JSON.stringify(options));
				dispatch(fromMatch.openChoiceModal(options, parentInfo, title));
			}
		}
		else if(actionTitle === "Scrap") {
			if(marketArray.includes(cardId)) {
				scrapMarketCard(cardId, user.counters.marketScrap, marketArray, matchPath, userPlayerNumber);
			}
			else {
				scrapCard(cardId, user.counters.scrap, matchPath, userPlayerNumber, user);
			}
			dispatch(fromMatch.closeCardModal());
		}
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(CardModal)