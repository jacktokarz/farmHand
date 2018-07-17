import { connect } from 'react-redux'
import {getText, saveText} from '../selectors'
import {fromText} from '../actions'
import {TextDisplay} from '../components'

const mapStateToProps= state => (
	{
		text: getText(state),
		dbText: saveText(state),
	}
)


export default connect(mapStateToProps)(TextDisplay)