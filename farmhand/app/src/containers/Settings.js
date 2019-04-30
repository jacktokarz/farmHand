import { connect } from 'react-redux'
import {Settings} from '../components'
import { fromLogin } from '../actions'
import { getLoginError, getNewPasswordInput, getOldPasswordInput } from '../selectors'
import { checkUpdate, getCookie } from '../utils'
import {} from '../imgs'

const mapStateToProps= (state, ownProps) => { 
	console.log("setting cookie result: "+JSON.stringify(getCookie("email")));
	return {
		errorMessage: getLoginError(state),
		emailAddress: getCookie("email"),
		newPasswordInput: getNewPasswordInput(state),
		oldPasswordInput: getOldPasswordInput(state),
	}
}

const mapDispatchToProps= (dispatch, ownProps) => ({

	checkUpdate: (email, oldPassword, newPassword) => {checkUpdate(dispatch, email.emailAddress, newPassword.newPasswordInput, oldPassword.oldPasswordInput) },
	updateNewPasswordInput: (e) => { dispatch(fromLogin.updateNewPasswordInput(e.target.value)) },
	updateOldPasswordInput: (e) => { dispatch(fromLogin.updateOldPasswordInput(e.target.value)) },

})


export default connect(mapStateToProps, mapDispatchToProps)(Settings)