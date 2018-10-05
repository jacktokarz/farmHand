import React from 'react'
import { connect } from 'react-redux'
import {fromMatch} from '../actions'
import {getMatchPath, getCurrentPlayerNumber, getPlayArea} from '../selectors'
import {Field} from '../components'
import {cardMap, convertPlayerNumberToWord, harvestCall} from '../utils'



const mapStateToProps= (state, ownProps) => { 
	const fieldCrops= ownProps.fieldData.crops===undefined?[]:ownProps.fieldData.crops;
	return {
		crops: fieldCrops,
		data: cardMap[ownProps.fieldData.id],
		harvestable: (ownProps.isCurrentPlayer) && (ownProps.player.counters.harvest > 0) && (fieldCrops.length > 0) && (ownProps.fieldData.available), //&& (cardMap[ownProps.fieldData.id].primary.discard===undefined || cardMap[ownProps.fieldData.id].primary.discard <= ownProps.player.hand.length)
		matchPath: getMatchPath(state),
		playArea: getPlayArea(state),
		playerNumber: getCurrentPlayerNumber(state),
	}
}

const mapDispatchToProps= (dispatch, ownProps) => ({
	harvestCrop: (matchPath, playArea, playerNumber) => {
		harvestCall(dispatch, ownProps.fieldData, matchPath, playArea, playerNumber, ownProps.player);
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Field)