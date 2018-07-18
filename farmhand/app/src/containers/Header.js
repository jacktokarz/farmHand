import { connect } from 'react-redux'
import {getHeaderButtonText} from '../selectors'
import {fromHeader} from '../actions'
import {Header} from '../components'

const mapStateToProps= state => (
	{
		buttonText: getHeaderButtonText(state),
	}
)

const mapDispatchToProps= dispatch => ({
	onClick: text => dispatch(fromHeader.signInToggle(text)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)