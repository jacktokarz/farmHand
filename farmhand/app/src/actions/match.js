export const actionTypes= {
	SAVE: 'match save',
}


export const save= (text) => ({
	type: actionTypes.SAVE,
	payload: text
})