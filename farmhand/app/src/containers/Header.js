import { connect } from 'react-redux'
import {getHeaderButtonText, getLoginModalVis, getErrorMessage, getUsername, getPassword} from '../selectors'
import {fromHeader} from '../actions'
import {Header} from '../components'
import {checkLogin} from '../utils'


const mapStateToProps= state => (
	{
		buttonText: getHeaderButtonText(state),
		loginModalVis: getLoginModalVis(state),
		errorMessage: getErrorMessage(state),
		username: getUsername(state),
		password: getPassword(state),
	}
)

const mapDispatchToProps= dispatch => ({
	onClick: text => {
		console.log("in header container, text= "+text.buttonText);
		if(text.buttonText==="Log In") {
			console.log("log in triggered");
			return dispatch(fromHeader.openLogin());
		}
		else if(text.buttonText==="Log Out") {
			return dispatch(fromHeader.logOut());
		}
	},

	checkLogin: (un, pw) => {
		console.log("checkLogin: "+un.username);
		const status= checkLogin(un.username, pw.password);
		console.log("in check login in the container, got status: "+status);
		if(status === "missing") {
			return dispatch(fromHeader.setErrorMessage("Incorrect Username"));
		}
		else if(status === "incorrect") {
			return dispatch(fromHeader.setErrorMessage("Incorrect Password"));
		}
		else if(status === "loggedIn") {
			return dispatch(fromHeader.logIn(un.username));
		}
	},
	closeLoginModal: () => dispatch(fromHeader.closeLoginModal()),
	loginSubmit: (un) => dispatch(fromHeader.setUsername(un)),
	openRegisterFromLogin: () => dispatch(fromHeader.openRegisterFromLogin()),
	updateUsername: e => dispatch(fromHeader.updateUsername(e.target.value)),
	updatePassword: e => dispatch(fromHeader.updatePassword(e.target.value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)