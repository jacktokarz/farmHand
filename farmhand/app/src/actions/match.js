export const actionTypes= {
	CLOSECARDMODAL: 'match closeCardModal',
	OPENCARDMODAL: 'match openCardModal',
}


export const openCardModal= (data) => ({
	type: actionTypes.OPENCARDMODAL,
	payload: data,
})


export const closeCardModal= () => ({
	type: actionTypes.CLOSECARDMODAL,

})
