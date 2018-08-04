export const actionTypes= {
	CLOSECARDMODAL: 'match closeCardModal',
	DRAWHAND: 'match drawHand',
	OPENCARDMODAL: 'match openCardModal',
	PLAYERTWODECK: 'match playerTwoDeck',
	PLAYERTWODISCARD: 'match playerTwoDiscard',
	PLAYERTWOHAND: 'match playerTwoHand',
	SAVEMARKETARRAY: 'match saveMarketArray',
	SAVEMATCHPLAYERS: 'match saveMatchPlayers',
	SAVEPLAYERONEDECK: 'match savePlayerOneDeck',
	SAVEPLAYERONEDISCARD: 'match savePlayerOneDiscard',
	SAVEPLAYERONEHAND: 'match savePlayerOneHand',
	SAVEPLAYERONEUSER: 'match savePlayerOneUser',
	SAVEPLAYERTWODECK: 'match savePlayerTwoDeck',
	SAVEPLAYERTWODISCARD: 'match savePlayerTwoDiscard',
	SAVEPLAYERTWOHAND: 'match savePlayerTwoHand',
	SAVEPLAYERTWOUSER: 'match savePlayerTwoUser',
	SAVEPLAYERTHREEDECK: 'match savePlayerThreeDeck',
	SAVEPLAYERTHREEDISCARD: 'match savePlayerThreeDiscard',
	SAVEPLAYERTHREEHAND: 'match savePlayerThreeHand',
	SAVEPLAYERTHREEUSER: 'match savePlayerThreeUser',
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

export const openCardModal= (data) => ({
	type: actionTypes.OPENCARDMODAL,
	payload: data,
})

export const saveMarketArray= (array) => ({
	type: actionTypes.SAVEMARKETARRAY,
	payload: array,
})

export const saveMatchPlayers= (array) => ({
	type: actionTypes.SAVEMATCHPLAYERS,
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

export const savePlayerTwoDeck= (deck) => ({
	type: actionTypes.SAVEPLAYERTWODECK,
	payload: deck,
})

export const savePlayerTwoDiscard= (discard) => ({
	type: actionTypes.SAVEPLAYERTWODISCARD,
	payload: discard,
})

export const savePlayerTwoHand= (hand) => ({
	type: actionTypes.SAVEPLAYERTWOHAND,
	payload: hand,
})

export const savePlayerTwoUser= (user) => ({
	type: actionTypes.SAVEPLAYERTWOUSER,
	payload: user,
})

export const savePlayerThreeDeck= (deck) => ({
	type: actionTypes.SAVEPLAYERTHREEDECK,
	payload: deck,
})

export const savePlayerThreeDiscard= (discard) => ({
	type: actionTypes.SAVEPLAYERTHREEDISCARD,
	payload: discard,
})

export const savePlayerThreeHand= (hand) => ({
	type: actionTypes.SAVEPLAYERTHREEHAND,
	payload: hand,
})

export const savePlayerThreeUser= (user) => ({
	type: actionTypes.SAVEPLAYERTHREEUSER,
	payload: user,
})

export const saveUserPlayerNumber= (playerNumber) => ({
	type: actionTypes.SAVEUSERPLAYERNUMBER,
	payload: playerNumber,
})