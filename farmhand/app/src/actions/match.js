export const actionTypes= {
	CLOSECARDMODAL: 'match closeCardModal',
	DRAWHAND: 'match drawHand',
	OPENCARDMODAL: 'match openCardModal',
	SAVEMARKETARRAY: 'match saveMarketArray',
	SAVEMATCHPATH: 'match saveMatchPath',
	SAVEMATCHPLAYERS: 'match saveMatchPlayers',
	SAVEUSERCOLOR: 'match saveUserColor',
	SAVEUSERCOUNTERS: 'match saveUserCounters',
	SAVEUSERDECK: 'match saveUserDeck',
	SAVEUSERDISCARD: 'match saveUserDiscard',
	SAVEUSERHAND: 'match saveUserHand',
	SAVENEXTPLAYERDECK: 'match saveNextPlayerDeck',
	SAVENEXTPLAYERDISCARD: 'match saveNextPlayerDiscard',
	SAVENEXTPLAYERHAND: 'match saveNextPlayerHand',
	SAVENEXTPLAYER: 'match saveNextPlayer',
	SAVEPREVIOUSPLAYERDECK: 'match savePreviousPlayerDeck',
	SAVEPREVIOUSPLAYERDISCARD: 'match savePreviousPlayerDiscard',
	SAVEPREVIOUSPLAYERHAND: 'match savePreviousPlayerHand',
	SAVEPREVIOUSPLAYER: 'match savePreviousPlayer',
	SAVEUSERPLAYERNUMBER: 'match saveUserPlayerNumber',
	UPDATECURRENTPLAYER: 'match updateCurrentPlayer',
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

export const saveMatchPlayers= (array) => ({
	type: actionTypes.SAVEMATCHPLAYERS,
	payload: array,
})

export const saveNextPlayerDeck= (deck) => ({
	type: actionTypes.SAVENEXTPLAYERDECK,
	payload: deck,
})

export const saveNextPlayerDiscard= (discard) => ({
	type: actionTypes.SAVENEXTPLAYERDISCARD,
	payload: discard,
})

export const saveNextPlayerHand= (hand) => ({
	type: actionTypes.SAVENEXTPLAYERHAND,
	payload: hand,
})

export const saveNextPlayer= (color, user, playerNumber) => ({
	type: actionTypes.SAVENEXTPLAYER,
	color: color,
	user: user,
	playerNumber: playerNumber,
})

export const savePreviousPlayerDeck= (deck) => ({
	type: actionTypes.SAVEPREVIOUSPLAYERDECK,
	payload: deck,
})

export const savePreviousPlayerDiscard= (discard) => ({
	type: actionTypes.SAVEPREVIOUSPLAYERDISCARD,
	payload: discard,
})

export const savePreviousPlayerHand= (hand) => ({
	type: actionTypes.SAVEPREVIOUSPLAYERHAND,
	payload: hand,
})

export const savePreviousPlayer= (color, user, playerNumber) => ({
	type: actionTypes.SAVEPREVIOUSPLAYER,
	color: color,
	user: user,
	playerNumber: playerNumber,
})

export const saveUserColor= (color) => ({
	type: actionTypes.SAVEUSERCOLOR,
	payload: color,
})

export const saveUserCounters= (counters) => ({
	type: actionTypes.SAVEUSERCOUNTERS,
	payload: counters,
})

export const saveUserDeck= (deck) => ({
	type: actionTypes.SAVEUSERDECK,
	payload: deck,
})

export const saveUserDiscard= (discard) => ({
	type: actionTypes.SAVEUSERDISCARD,
	payload: discard,
})

export const saveUserHand= (hand) => ({
	type: actionTypes.SAVEUSERHAND,
	payload: hand,
})

export const saveUserPlayerNumber= (playerNumber) => ({
	type: actionTypes.SAVEUSERPLAYERNUMBER,
	payload: playerNumber,
})

export const updateCurrentPlayer= (currentPlayer) => ({
	type: actionTypes.UPDATECURRENTPLAYER,
	payload: currentPlayer,
})