import React from 'react'
import { connect } from 'react-redux'
import {fromMatch}  from '../actions'
import {CardModal} from '../components'
import {} from '../utils'


const mapStateToProps= (state, ownProps) => (
	{
		id: ownProps.id,
		vis: ownProps.vis,
	}
)

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeCardModal()),
})


export default connect(mapStateToProps, mapDispatchToProps)(CardModal)