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
import {fromMatch} from '../actions'
import {Match} from '../components'
import {endTurn, getCookie, matchMount, playField} from '../utils'


const mapStateToProps= state => { console.log("player one in contianer: "+JSON.stringify(getPlayerOne(state))+'\n'+"and player number: "+getCurrentPlayerNumber(state)); return {
	currentPlayerNumber: getCurrentPlayerNumber(state),
	marketArray: getMarketArray(state),
	matchPath: getMatchPath(state),
	matchPlayers: [getPlayerOne(state), getPlayerTwo(state), getPlayerThree(state)],
	numberOfPlayers: getNumberOfPlayers(state),
	playArea: getPlayArea(state)===null?[]:getPlayArea(state),
	playField: (id, matchPath, userPlayerNumber) => {playField(id, matchPath, userPlayerNumber)},
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