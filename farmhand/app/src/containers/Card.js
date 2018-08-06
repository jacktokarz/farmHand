import React from 'react'
import { connect } from 'react-redux'
import {getUserHand} from '../selectors'
import {fromMatch}  from '../actions'
import {Card} from '../components'
import {cardMap} from '../utils'




const mapStateToProps= (state, ownProps) => (
	{
		actions: ownProps.place==="market" ? ["Buy"] : ["Play", "Plant"],
		data: cardMap[ownProps.id],
		handSize: ownProps.place==="market" ? 6 : getUserHand(state).length,
	}
)

const mapDispatchToProps= (dispatch, ownProps) => ({
	openCardModal: (actions, data) => dispatch(fromMatch.openCardModal(actions, data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Card)