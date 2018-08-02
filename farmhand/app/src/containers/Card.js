import React from 'react'
import { connect } from 'react-redux'
import {getHandSize} from '../selectors'
import {fromMatch}  from '../actions'
import {Card} from '../components'
import {} from '../utils'


const mapStateToProps= (state, ownProps) => { console.log("own props in card: "+JSON.stringify(ownProps)); return (
	{
		handSize: ownProps.place==="market" ? 6 : getHandSize(state),
		data: ownProps.data,
	}
) }

const mapDispatchToProps= (dispatch, ownProps) => ({
	openCardModal: () => dispatch(fromMatch.openCardModal(ownProps.id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Card)