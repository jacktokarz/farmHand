import React from 'react'
import { connect } from 'react-redux'
import {fromMatch} from '../actions'
import {getMarketArray, getMatchPath, getCurrentPlayerNumber, getPlayArea} from '../selectors'
import {Field} from '../components'
import {cardMap, convertPlayerNumberToWord, harvestCall} from '../utils'



const mapStateToProps= (state, ownProps) => { 
	const fieldCrops= ownProps.fieldData.crops===undefined?[]:ownProps.fieldData.crops;
	const cardData= cardMap[ownProps.fieldData.id];
	return {
		crops: fieldCrops,
		data: cardMap[ownProps.fieldData.id],
		harvestable: (ownProps.isCurrentPlayer) && (ownProps.player.counters.harvest > 0) 
			&& (fieldCrops.length > 0) && (ownProps.fieldData.available) 
			&& (cardData.primary.discard===undefined || cardData.primary.discard <= ownProps.player.hand.length)
			&& (cardData.primary.cropDiscard===undefined || cardData.primary.cropDiscard < ownProps.fieldData.crops.length),
		marketArray: getMarketArray(state),
		matchPath: getMatchPath(state),
		playArea: getPlayArea(state),
		playerNumber: getCurrentPlayerNumber(state),
	}
}

const mapDispatchToProps= (dispatch, ownProps) => ({
	harvestCrop: (marketArray, matchPath, playArea, playerNumber) => {
		harvestCall(dispatch, ownProps.fieldData, marketArray, matchPath, playArea, playerNumber, ownProps.player);
	},
	openCardModal: (actions, data) => dispatch(fromMatch.openCardModal(actions, data, ownProps.fieldData.id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Field)