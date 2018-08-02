import React from 'react'
import { connect } from 'react-redux'
import {getHandSize} from '../selectors'
import {fromMatch}  from '../actions'
import {Card} from '../components'
import {} from '../utils'


const mapStateToProps= (state, ownProps) => (
	{
		handSize: ownProps.place==="market" ? 6 : getHandSize(state),
	}
)

const mapDispatchToProps= (dispatch, ownProps) => ({
	openCardModal: (id) => dispatch(fromMatch.openCardModal(ownProps.id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Card)