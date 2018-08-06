import React from 'react'
import { connect } from 'react-redux'
import {fromMatch}  from '../actions'
import {CardModal} from '../components'
import {} from '../utils'


const mapStateToProps= (state, ownProps) => (
	{
		actions: ownProps.actions,
		vis: ownProps.vis,
		data: ownProps.data,
	}
)

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeCardModal()),
	func: (title) => {
		if(title === "Example") {
			console.log("EXAMPLE!");
		}
		else {
			console.log("uh oh...");
		}
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(CardModal)