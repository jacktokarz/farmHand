import { fromHeader } from '../actions'
import {getCookie} from '../utils'

const initState= 
	{
		buttonText: getCookie("user") === null ? "Log In" : "Log Out", 
		confirmPassword: "",
		errorMessage: "",
		loginModalVis: "none", 
		password: "", 
		registerErrorMessage: "",
		registerModalVis: "none",
		user: getCookie("user"),
		username: "", 
	};

export default (state=initState, action) => {
	switch(action.type) {
		case fromHeader.actionTypes.CLOSELOGINMODAL:
			return {...state, 
				loginModalVis: "none"
			};
		case fromHeader.actionTypes.CLOSEREGISTERMODAL:
			return {...state, 
				registerModalVis: "none"
			};
		case fromHeader.actionTypes.LOGIN:
			return {...state,
				buttonText: "Log Out",
				loginModalVis: "none",
				user: action.payload,
			};
		case fromHeader.actionTypes.LOGOUT:
			return {...state, 
				buttonText: "Log In"
			};
		case fromHeader.actionTypes.OPENLOGIN:
			return {...state, 
				loginModalVis: "block"
			};
		case fromHeader.actionTypes.OPENREGISTERFROMLOGIN:
			return {...state, 
				loginModalVis: "none",
				errorMessage: "",
				registerErrorMessage: "",
				registerModalVis: "block",
			};
		case fromHeader.actionTypes.REGISTERUSER:
			return {
				...state,
				buttonText: "Log Out",
				registerModalVis: "none",
				user: action.payload,
			};
		case fromHeader.actionTypes.SETERRORMESSAGE:
			return {...state, 
				errorMessage: action.payload
			};
		case fromHeader.actionTypes.SETREGISTERERRORMESSAGE:
			return {...state, 
				registerErrorMessage: action.payload
			};
		case fromHeader.actionTypes.SETUSERNAME:
			return {...state, 
				username: action.payload
			};
		case fromHeader.actionTypes.UPDATECONFIRMPASSWORD:
			return {...state, 
				confirmPassword: action.payload
			};
		case fromHeader.actionTypes.UPDATEUSERNAME:
			return {...state, 
				username: action.payload
			};
		case fromHeader.actionTypes.UPDATEPASSWORD:
			return {...state, 
				password: action.payload
			};
	}
	return state;
}