import { connect } from 'react-redux'
import {Lobby} from '../components'
import {getCookie, createMatch} from '../utils'

const mapStateToProps= state => (
	{}
)

const mapDispatchToProps= dispatch => ({
	createMatch: () => { createMatch(); },
})

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)