export const actionTypes= {
	CLOSECARDMODAL: 'match closeCardModal',
	DISCARDHAND: 'match discardHand',
	DRAWHAND: 'match drawHand',
	OPENCARDMODAL: 'match openCardModal',
	SAVEMARKETARRAY: 'match saveMarketArray',
	SAVEPLAYERONEDECK: 'match savePlayerOneDeck',
	SAVEPLAYERONEDISCARD: 'match savePlayerOneDiscard',
	SAVEPLAYERONEHAND: 'match savePlayerOneHand',
	SAVEPLAYERONEUSER: 'match savePlayerOneUser',
}


export const closeCardModal= () => ({
	type: actionTypes.CLOSECARDMODAL,

})

export const discardHand= (discard, hand) => ({
	type: actionTypes.DISCARDHAND,
	discard: discard,
	hand: hand,
})

export const drawHand= (deck, discard, hand) => ({
	type: actionTypes.DRAWHAND,
	deck: deck,
	discard: discard,
	hand: hand,
})

export const openCardModal= (data) => ({
	type: actionTypes.OPENCARDMODAL,
	payload: data,
})

export const saveMarketArray= (array) => ({
	type: actionTypes.SAVEMARKETARRAY,
	payload: array,
})

export const savePlayerOneDeck= (deck) => ({
	type: actionTypes.SAVEPLAYERONEDECK,
	payload: deck,
})

export const savePlayerOneDiscard= (discard) => ({
	type: actionTypes.SAVEPLAYERONEDISCARD,
	payload: discard,
})

export const savePlayerOneHand= (hand) => ({
	type: actionTypes.SAVEPLAYERONEHAND,
	payload: hand,
})

export const savePlayerOneUser= (user) => ({
	type: actionTypes.SAVEPLAYERONEUSER,
	payload: user,
})