export const actionTypes= {
	CLOSECARDMODAL: 'match closeCardModal',
	CLOSECHOICEMODAL: 'match closeChoiceModal',
	DRAWHAND: 'match drawHand',
	OPENCARDMODAL: 'match openCardModal',
	OPENCHOICEMODAL: 'match openChoiceModal',
	SAVECOMMUNITYFIELD: 'match saveCommunityField',
	SAVEMARKETARRAY: 'match saveMarketArray',
	SAVE_MATCH_LOG: 'match saveMatchLog',
	SAVEMATCHPATH: 'match saveMatchPath',
	SAVENUMBEROFPLAYERS: 'match saveNumberOfPlayers',
	SAVEPLAYERONE: 'match savePlayerOne',
	SAVEPLAYERTWO: 'match savePlayerTwo',
	SAVEPLAYERTHREE: 'match savePlayerThree',
	SAVEUSERPLAYERNUMBER: 'match saveUserPlayerNumber',
	SAVETRASHARRAY: 'match saveTrashArray',
	UPDATEACTIVATEDFACTIONS: 'match updateActivateFactions',
	UPDATECURRENTPLAYERNUMBER: 'match updateCurrentPlayerNumber',
	UPDATEPLAYAREA: 'match updatePlayArea',
	UPDATETURNCOUNT: 'match updateTurnCount',
}



export const closeCardModal= () => ({
	type: actionTypes.CLOSECARDMODAL,
})

export const closeChoiceModal= () => ({
	type: actionTypes.CLOSECHOICEMODAL,
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

export const openChoiceModal= (options, parentInfo, required, title) => ({
	type: actionTypes.OPENCHOICEMODAL,
	options: options,
	parentInfo: parentInfo,
	required: required,
	title: title,
})

export const saveCommunityField= (field) => ({
	type: actionTypes.SAVECOMMUNITYFIELD,
	payload: field,
})

export const saveMarketArray= (array) => ({
	type: actionTypes.SAVEMARKETARRAY,
	payload: array,
})

export const saveMatchLog= (array) => ({
	type: actionTypes.SAVE_MATCH_LOG,
	matchLog: array,
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

export const saveTrashArray= (trashArray) => ({
	type: actionTypes.SAVETRASHARRAY,
	trashArray: trashArray,
})

export const saveUserPlayerNumber= (playerNumber) => ({
	type: actionTypes.SAVEUSERPLAYERNUMBER,
	payload: playerNumber,
})

export const updateActivatedFactions= (activatedFactions) => ({
	type: actionTypes.UPDATEACTIVATEDFACTIONS,
	payload: activatedFactions,
})

export const updateCurrentPlayerNumber= (currentPlayerNumber) => ({
	type: actionTypes.UPDATECURRENTPLAYERNUMBER,
	payload: currentPlayerNumber,
})

export const updatePlayArea= (playArea) => ({
	type: actionTypes.UPDATEPLAYAREA,
	payload: playArea,
})

export const updateTurnCount= (turnCount) => ({
	type: actionTypes.UPDATETURNCOUNT,
	payload: turnCount,
})