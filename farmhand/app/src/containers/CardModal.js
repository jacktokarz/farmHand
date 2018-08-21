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
import {buyField, buyMarketCard, cardMap, combineCounters, convertPlayerNumberToWord, isThereADefaultChoice, plantCard, playCard, scrapCard, scrapMarketCard} from '../utils'


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
	func: (actionTitle, cardId, data, marketArray, matchPath, playArea, trashArray, user, userPlayerNumber) => {
		const playerWord= convertPlayerNumberToWord(userPlayerNumber);
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
					buyField(null, marketArray, matchPath, user.counters.coin - data.cost, cardId, playerWord);
					dispatch(fromMatch.closeCardModal());
				}
			}
			else {
				buyMarketCard(cardId, marketArray, matchPath, user.counters.coin - data.cost, playerWord);
				dispatch(fromMatch.closeCardModal());
			}
		}
		else if(actionTitle === "Play") {
			const cardData= cardMap[cardId];
			let activatedCounters= isThereADefaultChoice(cardData, user);
			if(activatedCounters !== null) {
				user.activatedFactions= user.activatedFactions===undefined?[]:user.activatedFactions;
				if(user.activatedFactions.includes(cardData.faction)) {
					activatedCounters= combineCounters(activatedCounters, cardData.secondary);
				}

				if(activatedCounters.discard > 0) {
					const title= "Discard which card from your hand?";
					const parentInfo= {data: activatedCounters, cardId: cardId};
					let options= [];
					for(var i=0; i<user.hand.length; i++) {
						options.push({id: user.hand[i].id, title: user.hand[i].title});
					}
					options.splice(options.indexOf(cardId), 1);
					dispatch(fromMatch.openChoiceModal(options, parentInfo, title));
				}
				else {
					playCard(activatedCounters, user.counters, cardId, matchPath, playArea, playerWord, user);
					dispatch(fromMatch.closeCardModal());					
				}
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
				plantCard(cardId, user.fields[0], matchPath, user.counters.plant, playerWord, user);
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
				scrapMarketCard(cardId, user.counters.marketScrap, marketArray, matchPath, playerWord, trashArray);
			}
			else {
				scrapCard(cardId, user.counters.scrap, matchPath, playerWord, user, trashArray);
			}
			dispatch(fromMatch.closeCardModal());
		}
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(CardModal)