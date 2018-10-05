import React from 'react'
import { connect } from 'react-redux'
import { 
	getCommunityField,
	getCurrentPlayerNumber,
	getMarketArray,
	getMatchPath,
	getNumberOfPlayers,
	getPlayArea,
	getPlayerOne,
	getPlayerTwo,
	getPlayerThree,
	getTurnCount,
	getUser, 
	getUserPlayerNumber, 
} from '../selectors'
import {Match} from '../components'
import {buyMarketPlenty, buyStarterField, endTurn, matchMount} from '../utils'


const mapStateToProps= state => { console.log("comm field is: "+JSON.stringify(getCommunityField(state))); return {
	communityField: getCommunityField(state),
	currentPlayerNumber: getCurrentPlayerNumber(state),
	marketArray: getMarketArray(state),
	matchPath: getMatchPath(state),
	matchPlayers: [getPlayerOne(state), getPlayerTwo(state), getPlayerThree(state)],
	numberOfPlayers: getNumberOfPlayers(state),
	playArea: getPlayArea(state)===null?[]:getPlayArea(state),
	turnCount: getTurnCount(state),
	user: getUser(state),
	userPlayerNumber: getUserPlayerNumber(state),
} }

const mapDispatchToProps= dispatch => {
	matchMount(dispatch);
	return {
		buyMarketPlenty: (matchPath, userPlayerNumber, userPlayer) => { 
			buyMarketPlenty(matchPath, userPlayerNumber, userPlayer);
		},
		buyMarketStarterField: (marketArray, matchPath, user, userPlayerNumber) => { 
			buyStarterField(dispatch, marketArray, matchPath, user, userPlayerNumber)
		},
		endTurn: (currentPlayerNumber, userPlayer, matchPath, numberOfPlayers, playArea, turnCount) => { endTurn(currentPlayerNumber, userPlayer, matchPath, numberOfPlayers, playArea, turnCount) },
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Match)