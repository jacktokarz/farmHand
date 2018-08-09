import React from 'react'
import { connect } from 'react-redux'
import {getUserHand} from '../selectors'
import {fromMatch}  from '../actions'
import {Card} from '../components'
import {cardMap} from '../utils'




const mapStateToProps= (state, ownProps) => { console.log("own props in card: "+JSON.stringify(ownProps)); return (
	{
		actions: ownProps.place==="market" ? ["Buy"] : ["Play", "Plant"],
		data: cardMap[ownProps.id],
		handSize: ownProps.place==="market" ? 6 : getUserHand(state).length,
		place: ownProps.place,
	}
) }

const mapDispatchToProps= (dispatch, ownProps) => ({
	openCardModal: (actions, data) => dispatch(fromMatch.openCardModal(actions, data, ownProps.id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Card)