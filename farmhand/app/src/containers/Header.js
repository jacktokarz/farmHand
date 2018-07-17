import { connect } from 'react-redux'
import {getHeader} from '../selectors'
import {fromHeader} from '../actions'
import {Header} from '../components'
import {registerUser, logInUser} from '../utils'

const mapStateToProps= state => (
	{
		greeting: getHeader(state),
		headerButtonText: getHeader(state),
	}
)

const mapDispatchToProps= dispatch => ({
	headerButtonAction: e => dispatch(fromHeader.signIn(e.target.username.value)),
})


export default connect(mapStateToProps)(Header)