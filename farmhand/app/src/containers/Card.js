import React from 'react'
import { connect } from 'react-redux'
import {getUserHandSize} from '../selectors'
import {fromMatch}  from '../actions'
import {Card} from '../components'
import {cardMap} from '../utils'




const mapStateToProps= (state, ownProps) => { 
	const cardData= cardMap[ownProps.id];
	const counts= ownProps.counters===undefined?{}:ownProps.counters;
	let actions=[];
	if(ownProps.place==="userHand") {
		actions.push("Play");
		if(counts.plant>0) {
			actions.push("Plant");
		}
	}
	else if(ownProps.place==="market" && counts.coin >= cardData.cost) {
		actions.push("Buy");
	}
	return (
	{
		actions: actions,
		data: cardData,
		handSize: ownProps.place==="market" ? 6 : getUserHandSize(state),
		place: ownProps.place,
	}
) }

const mapDispatchToProps= (dispatch, ownProps) => ({
	openCardModal: (actions, data) => dispatch(fromMatch.openCardModal(actions, data, ownProps.id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Card)