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

})


export default connect(mapStateToProps, mapDispatchToProps)(Header)