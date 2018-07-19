import { connect } from 'react-redux'
import {getHeaderButtonText, getLoginModalVis, getErrorMessage, getUsername, getPassword, getConfirmPassword, getRegisterModalVis, getRegisterErrorMessage} from '../selectors'
import {fromHeader} from '../actions'
import {Header} from '../components'
import {checkLogin, checkRegister, deleteCookie, getCookie} from '../utils'


const mapStateToProps= state => (
	{
		buttonText: getHeaderButtonText(state),
		loginModalVis: getLoginModalVis(state),
		errorMessage: getErrorMessage(state),
		username: getUsername(state),
		password: getPassword(state),

		confirmPassword: getConfirmPassword(state),
		registerModalVis: getRegisterModalVis(state),
    	registerErrorMessage: getRegisterErrorMessage(state),
    
		user: getCookie('user'),
	}
)

const mapDispatchToProps= dispatch => ({
	logButtonAction: text => {
		if(text.buttonText==="Log In") {
			return dispatch(fromHeader.openLogin());
		}
		else if(text.buttonText==="Log Out") {
			deleteCookie("user");
			return dispatch(fromHeader.logOut());
		}
	},

	checkLogin: (un, pw) => { checkLogin(dispatch, un.username, pw.password); },
	closeLoginModal: () => dispatch(fromHeader.closeLoginModal()),
	openRegisterFromLogin: () => dispatch(fromHeader.openRegisterFromLogin()),
	updateUsername: e => dispatch(fromHeader.updateUsername(e.target.value)),
	updatePassword: e => dispatch(fromHeader.updatePassword(e.target.value)),

	closeRegisterModal: () => dispatch(fromHeader.closeRegisterModal()),
    updateConfirmPassword: e => dispatch(fromHeader.updateConfirmPassword(e.target.value)),
    checkRegister: (un, pw, cp) => { checkRegister(dispatch, un.username, pw.password, cp.confirmPassword); },

})


export default connect(mapStateToProps, mapDispatchToProps)(Header)