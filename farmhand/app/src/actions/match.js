export const actionTypes= {
	OPENCARDMODAL: 'match openCardModal',
	SAVE: 'match save',
}


export const openCardModal= (id) => ({
	type: actionTypes.OPENCARDMODAL,
	payload: id,
})
