export const actionTypes= {
	SAVE: 'text save',
}


export const save= (text) => ({
	type: actionTypes.SAVE,
	payload: text
})