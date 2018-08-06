export const actionTypes= {
	CLOSECARDMODAL: 'match closeCardModal',
	DRAWHAND: 'match drawHand',
	OPENCARDMODAL: 'match openCardModal',
	SAVEMARKETARRAY: 'match saveMarketArray',
	SAVEMATCHPLAYERS: 'match saveMatchPlayers',
	SAVEUSERDECK: 'match saveUserDeck',
	SAVEUSERDISCARD: 'match saveUserDiscard',
	SAVEUSERHAND: 'match saveUserHand',
	SAVEUSER: 'match saveUser',
	SAVENEXTPLAYERDECK: 'match saveNextPlayerDeck',
	SAVENEXTPLAYERDISCARD: 'match saveNextPlayerDiscard',
	SAVENEXTPLAYERHAND: 'match saveNextPlayerHand',
	SAVENEXTPLAYERUSER: 'match saveNextPlayerUser',
	SAVEPREVIOUSPLAYERDECK: 'match savePreviousPlayerDeck',
	SAVEPREVIOUSPLAYERDISCARD: 'match savePreviousPlayerDiscard',
	SAVEPREVIOUSPLAYERHAND: 'match savePreviousPlayerHand',
	SAVEPREVIOUSPLAYERUSER: 'match savePreviousPlayerUser',
	SAVEUSERPLAYERNUMBER: 'match saveUserPlayerNumber',
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

export const openCardModal= (actions, data) => ({
	type: actionTypes.OPENCARDMODAL,
	actions: actions,
	data: data,
})

export const saveMarketArray= (array) => ({
	type: actionTypes.SAVEMARKETARRAY,
	payload: array,
})

export const saveMatchPlayers= (array) => ({
	type: actionTypes.SAVEMATCHPLAYERS,
	payload: array,
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

export const saveUser= (user) => ({
	type: actionTypes.SAVEUSER,
	payload: user,
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

export const saveNextPlayerUser= (user) => ({
	type: actionTypes.SAVENEXTPLAYERUSER,
	payload: user,
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

export const savePreviousPlayerUser= (user) => ({
	type: actionTypes.SAVEPREVIOUSPLAYERUSER,
	payload: user,
})

export const saveUserPlayerNumber= (playerNumber) => ({
	type: actionTypes.SAVEUSERPLAYERNUMBER,
	payload: playerNumber,
})