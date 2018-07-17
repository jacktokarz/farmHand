import { connect } from 'react-redux'
import {getText} from '../selectors'
import {fromText} from '../actions'
import {TextInput} from '../components'
import {postMessage} from '../utils'

const mapStateToProps= state => (
	{
		text: getText(state)
	}
)

const mapDispatchToProps= dispatch => ({
	onSubmit: msg => postMessage(msg),
	onChange: e => dispatch(fromText.set(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TextInput)