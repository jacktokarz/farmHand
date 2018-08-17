import React from 'react'
import { connect } from 'react-redux'
import {fromMatch} from '../actions'
import {getMatchPath, getCurrentPlayerNumber, getPlayArea} from '../selectors'
import {Field} from '../components'
import {cardMap, harvestCrop} from '../utils'



const mapStateToProps= (state, ownProps) => { 
	return {
		crops: ownProps.fieldData.crops,
		data: cardMap[ownProps.fieldData.id],
		harvestable: (ownProps.isCurrentPlayer) && (ownProps.player.counters.harvest > 0) && (ownProps.fieldData.crops.length > 0) && (ownProps.fieldData.available),
		matchPath: getMatchPath(state),
		playArea: getPlayArea(state),
		playerNumber: getCurrentPlayerNumber(state),
	}
}

const mapDispatchToProps= (dispatch, ownProps) => ({
	harvestCrop: (matchPath, playArea, playerNumber) => {
		console.log("Harvesting from: "+JSON.stringify(ownProps.fieldData));
		if(ownProps.fieldData.crops.length > 1) {
			let options= [];
			for(var i=0; i < ownProps.fieldData.crops.length; i++) {
				options.push({id: ownProps.fieldData.crops[i], title: i})
			}
			const parentInfo= ownProps.fieldData;
			const title= "Harvest which crop from "+cardMap[ownProps.fieldData.id].title+"?";
			dispatch(fromMatch.openChoiceModal(options, parentInfo, title));
		}
		else {
			console.log("Going with the only crop in "+cardMap[ownProps.fieldData.id].title);
			harvestCrop(ownProps.fieldData.crops[0], ownProps.fieldData, matchPath, playArea, playerNumber, ownProps.player);
		}
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Field)