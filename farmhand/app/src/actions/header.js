export const actionTypes= {
	SIGNINTOGGLE: 'header signInToggle',
}

export const signInToggle= (value) => ({
	type: actionTypes.SIGNINTOGGLE,
	payload: (value.buttonText === "Log In" ? "Log Out" : "Log In"),
})