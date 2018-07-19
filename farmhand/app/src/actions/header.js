export const actionTypes= {
	CLOSELOGINMODAL: 'header closeLoginModal',
	CLOSEREGISTERMODAL: 'header closeRegisterModal',
	LOGIN: 'header logIn',
	LOGOUT: 'header logOut',
	OPENLOGIN: 'header openLogin',
	OPENLOGINFROMPLAY: 'header openLoginFromPlay',
	OPENREGISTERFROMLOGIN: 'header openRegisterFromLogin',
	REGISTERUSER: 'header registerUser',
	SETERRORMESSAGE: 'header setErrorMessage',
	SETREGISTERERRORMESSAGE: 'header setRegisterErrorMessage',
	SETUSERNAME: 'header setUsername',
	UPDATECONFIRMPASSWORD: 'header updateConfirmPassword',
	UPDATEUSERNAME: 'header updateUsername',
	UPDATEPASSWORD: 'header updatePassword',
}

export const closeLoginModal= () => ({
	type: actionTypes.CLOSELOGINMODAL,
	payload: "",
})


export const closeRegisterModal= () => ({
	type: actionTypes.CLOSEREGISTERMODAL,
	payload: "",
})

export const logIn= (value) => ({
	type: actionTypes.LOGIN,
	payload: value,
})

export const logOut= () => ({
	type: actionTypes.LOGOUT,
	payload: "",
})

export const openLogin= () => ({
	type: actionTypes.OPENLOGIN,
	payload: "",
})

export const openLoginFromPlay= () => ({
	type: actionTypes.OPENLOGINFROMPLAY,
	payload: "",
})

export const openRegisterFromLogin= () => ({
	type: actionTypes.OPENREGISTERFROMLOGIN,
	payload: "",
})

export const registerUser= (un) => ({
	type: actionTypes.REGISTERUSER,
	payload: un,
})

export const setErrorMessage= (msg) => ({
	type: actionTypes.SETERRORMESSAGE,
	payload: msg,
})

export const setRegisterErrorMessage= (msg) => ({
	type: actionTypes.SETREGISTERERRORMESSAGE,
	payload: msg,
})

export const setUsername= (un) => ({
	type: actionTypes.SETUSERNAME,
	payload: un,
})

export const updateConfirmPassword= (value) => ({
	type: actionTypes.UPDATECONFIRMPASSWORD,
	payload: value,
})

export const updateUsername= (value) => ({
	type: actionTypes.UPDATEUSERNAME,
	payload: value,
})

export const updatePassword= (value) => ({
	type: actionTypes.UPDATEPASSWORD,
	payload: value,
})