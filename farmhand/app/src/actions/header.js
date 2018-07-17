export const actionTypes= {
	SIGNIN: 'header signIn',
}

export const signIn= (username) => ({
	type: actionTypes.signIn,
	payload: username
})
