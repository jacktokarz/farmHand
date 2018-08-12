export const actionTypes= {
	CLOSECARDMODAL: 'match closeCardModal',
	DRAWHAND: 'match drawHand',
	OPENCARDMODAL: 'match openCardModal',
	SAVEMARKETARRAY: 'match saveMarketArray',
	SAVEMATCHPATH: 'match saveMatchPath',
	SAVENUMBEROFPLAYERS: 'match saveNumberOfPlayers',
	SAVEPLAYERONE: 'match savePlayerOne',
	SAVEPLAYERTWO: 'match savePlayerTwo',
	SAVEPLAYERTHREE: 'match savePlayerThree',
	SAVEUSERPLAYERNUMBER: 'match saveUserPlayerNumber',
	UPDATECURRENTPLAYERNUMBER: 'match updateCurrentPlayerNumber',
	UPDATEPLAYAREA: 'match updatePlayArea',
}



export const closeCardModal= () => ({
	type: actionTypes.CLOSECARDMODAL,

})

export const drawHand= (deck, discard, hand) => ({
	type: actionTypes.DRAWHAND,
	deck: deck,
	discard: discard,
	hand: hand,
})

export const openCardModal= (actions, data, id) => ({
	type: actionTypes.OPENCARDMODAL,
	actions: actions,
	data: data,
	id: id,
})

export const saveMarketArray= (array) => ({
	type: actionTypes.SAVEMARKETARRAY,
	payload: array,
})

export const saveMatchPath= (path) => ({
	type: actionTypes.SAVEMATCHPATH,
	payload: path,
})

export const saveNumberOfPlayers= (number) => ({
	type: actionTypes.SAVENUMBEROFPLAYERS,
	payload: number,
})

export const savePlayerOne= (player) => ({
	type: actionTypes.SAVEPLAYERONE,
	player: player,
})

export const savePlayerTwo= (player) => ({
	type: actionTypes.SAVEPLAYERTWO,
	player: player,
})

export const savePlayerThree= (player) => ({
	type: actionTypes.SAVEPLAYERTHREE,
	player: player,
})

export const saveUserPlayerNumber= (playerNumber) => ({
	type: actionTypes.SAVEUSERPLAYERNUMBER,
	payload: playerNumber,
})

export const updateCurrentPlayerNumber= (currentPlayerNumber) => ({
	type: actionTypes.UPDATECURRENTPLAYERNUMBER,
	payload: currentPlayerNumber,
})

export const updatePlayArea= (playArea) => ({
	type: actionTypes.UPDATEPLAYAREA,
	payload: playArea,
})