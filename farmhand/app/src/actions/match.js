export const actionTypes= {
	CLOSECARDMODAL: 'match closeCardModal',
	OPENCARDMODAL: 'match openCardModal',
}


export const openCardModal= (id) => ({
	type: actionTypes.OPENCARDMODAL,
	payload: id,
})


export const closeCardModal= () => ({
	type: actionTypes.CLOSECARDMODAL,

})
