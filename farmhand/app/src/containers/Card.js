import React from 'react'
import { connect } from 'react-redux'
import {getHandSize} from '../selectors'
import {fromMatch}  from '../actions'
import {Card} from '../components'
import {cardMap} from '../utils'




const mapStateToProps= (state, ownProps) => { console.log("own props in card: "+JSON.stringify(ownProps)); return (
	{
		data: cardMap[ownProps.id],
		handSize: ownProps.place==="market" ? 6 : getHandSize(state),
	}
) }

const mapDispatchToProps= (dispatch, ownProps) => ({
	openCardModal: (data) => dispatch(fromMatch.openCardModal(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Card)