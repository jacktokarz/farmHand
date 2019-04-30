import React from 'react'
import { connect } from 'react-redux'
import {getPlayArea, getPlayerOne, getPlayerTwo, getPlayerThree, getUserHandSize, getUserPlayerNumber} from '../selectors'
import {fromMatch}  from '../actions'
import {Card} from '../components'
import {cardMap, isCardPlayable} from '../utils'



const mapStateToProps= (state, ownProps) => { 
	const cardData= cardMap[ownProps.id];
	const counts= ownProps.counters===undefined?{}:ownProps.counters;
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

	let actions=[];
	if(ownProps.place==="userHand") {
		if(isCardPlayable(cardData, user)) {
			if(cardData.primary.or !== undefined) {
				actions.push("Play Left");
				actions.push("Play Right");
			}
			else {
				actions.push("Play");				
			}
		}
		if(counts.plant>0 && user.fields.length > 0) {
			actions.push("Plant");
		}
		if(counts.scrap>0) {
			actions.push("Scrap");
		}
	}
	else if(ownProps.place==="market") {
		if(counts.coin >= cardData.cost) {
			actions.push("Buy");			
		}
		if(counts.marketScrap > 0) {
			actions.push("Scrap");
		}
	}

	return (
	{
		actions: actions,
		data: cardData,
		handSize: ownProps.place==="market" ? 5 : (ownProps.place==="playArea" ? getPlayArea(state).length : user.hand.length),
		place: ownProps.place,
	}
) }

const mapDispatchToProps= (dispatch, ownProps) => ({
	openCardModal: (actions, data) => dispatch(fromMatch.openCardModal(actions, data, ownProps.id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Card)