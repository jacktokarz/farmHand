import { fromHeader } from '../actions'


const initState= {buttonText: "Log In", loginModalVis: "none", username: "", password: ""};

export default (state=initState, action) => {
	switch(action.type) {
		case fromHeader.actionTypes.SIGNINTOGGLE:
			return {...state,
				buttonText: action.payload,
			};
		case fromHeader.actionTypes.LOGOUT:
			console.log("about to log out in header reducer: "+JSON.stringify(state))
			return {...state, buttonText: "Log In"};
		case fromHeader.actionTypes.LOGIN:
			return {...state,
				buttonText: "Log Out",
				username: action.payload,
			};

		case fromHeader.actionTypes.CLOSELOGINMODAL:
			return {...state, loginModalVis: "none"};
		case fromHeader.actionTypes.LOGIN:
			return {...state, loginModalVis: "none", username: action.payload};
		case fromHeader.actionTypes.OPENLOGIN:
			console.log("in login reducers, opening login"+JSON.stringify(state));
			return {...state, loginModalVis: "block",};
		case fromHeader.actionTypes.OPENREGISTERFROMLOGIN:
			return {...state, loginModalVis: "none"};
		case fromHeader.actionTypes.SETERRORMESSAGE:
			return {...state, errorMessage: action.payload};
		case fromHeader.actionTypes.SETUSERNAME:
			return {...state, username: action.payload};
		case fromHeader.actionTypes.UPDATEUSERNAME:
			return {...state, username: action.payload};
		case fromHeader.actionTypes.UPDATEPASSWORD:
			return {...state, password: action.payload};
	}
	return state;
}