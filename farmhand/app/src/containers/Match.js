import React from 'react'
import { connect } from 'react-redux'
import { 
	getCurrentPlayerNumber,
	getMarketArray,
	getMatchPath,
	getNumberOfPlayers,
	getPlayArea,
	getPlayerOne,
	getPlayerTwo,
	getPlayerThree,
	getUser, 
	getUserPlayerNumber, 
} from '../selectors'
import {Match} from '../components'
import {endTurn, matchMount} from '../utils'


const mapStateToProps= state => { return {
	currentPlayerNumber: getCurrentPlayerNumber(state),
	marketArray: getMarketArray(state),
	matchPath: getMatchPath(state),
	matchPlayers: [getPlayerOne(state), getPlayerTwo(state), getPlayerThree(state)],
	numberOfPlayers: getNumberOfPlayers(state),
	playArea: getPlayArea(state)===null?[]:getPlayArea(state),
	user: getUser(state),
	userPlayerNumber: getUserPlayerNumber(state),
} }

const mapDispatchToProps= dispatch => {
	matchMount(dispatch);
	return {
		endTurn: (currentPlayerNumber, userPlayer, matchPath, numberOfPlayers, playArea, userPlayerNumber) => { endTurn(currentPlayerNumber, userPlayer, matchPath, numberOfPlayers, playArea, userPlayerNumber) },
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Match)