export const actionTypes= {
	CLOSELOGINMODAL: 'header closeLoginModal',
	LOGIN: 'header logIn',
	LOGOUT: 'header logOut',
	OPENLOGIN: 'header openLogin',
	OPENREGISTERFROMLOGIN: 'header openRegisterFromLogin',
	SETERRORMESSAGE: 'header setErrorMessage',
	SETUSERNAME: 'header setUsername',
	SIGNINTOGGLE: 'header signInToggle',
	UPDATEUSERNAME: 'header updateUsername',
	UPDATEPASSWORD: 'header updatePassword',
}

export const closeLoginModal= () => ({
	type: actionTypes.CLOSELOGINMODAL,
	payload: "",
})

export const logIn= (value) => {
	console.log("log in in header actions");
	return {
	type: actionTypes.LOGIN,
	payload: value,
} }

export const logOut= () => {
	console.log("log out in header actions");
	return { type: actionTypes.LOGOUT,
	payload: "",
} }

export const openLogin= () => {
	console.log("actions: open login");
	return {type: actionTypes.OPENLOGIN,
	payload: "", }
}

export const openRegisterFromLogin= () => ({
	type: actionTypes.OPENREGISTERFROMLOGIN,
	payload: "",
})

export const setErrorMessage= (msg) => ({
	type: actionTypes.SETERRORMESSAGE,
	payload: msg,
})

export const setUsername= (un) => ({
	type: actionTypes.SETUSERNAME,
	payload: un,
})

export const signInToggle= (value) => ({
	type: actionTypes.SIGNINTOGGLE,
	payload: value.buttonText === "Log In" ? "Log Out" : "Log In",
})

export const updateUsername= (value) => ({
	type: actionTypes.UPDATEUSERNAME,
	payload: value,
})

export const updatePassword= (value) => ({
	type: actionTypes.UPDATEPASSWORD,
	payload: value,
})