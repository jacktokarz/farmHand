export const actionTypes= {
	CLOSECARDMODAL: 'match closeCardModal',
	OPENCARDMODAL: 'match openCardModal',
	SAVEMARKETARRAY: 'match saveMarketArray',
}


export const openCardModal= (data) => ({
	type: actionTypes.OPENCARDMODAL,
	payload: data,
})


export const closeCardModal= () => ({
	type: actionTypes.CLOSECARDMODAL,

})


export const saveMarketArray= (array) => ({
	type: actionTypes.SAVEMARKETARRAY,
	payload: array,
})