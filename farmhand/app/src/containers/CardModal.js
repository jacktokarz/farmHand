import React from 'react'
import { connect } from 'react-redux'
import {fromMatch}  from '../actions'
import {CardModal} from '../components'
import {} from '../utils'


const mapStateToProps= (state, ownProps) => (
	{
		id: ownProps.id,
	}
)

const mapDispatchToProps= dispatch => {
	
}


export default connect(mapStateToProps, mapDispatchToProps)(CardModal)