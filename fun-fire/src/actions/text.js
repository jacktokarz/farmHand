export const actionTypes= {
	SET: 'text set',
	SAVE: 'text save',
}

export const set= (text) => ({
	type: actionTypes.SET,
	payload: text
})

export const save= (text) => ({
	type: actionTypes.SAVE,
	payload: text
})