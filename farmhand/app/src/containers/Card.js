import React from 'react'
import { connect } from 'react-redux'
import {getHandSize} from '../selectors'
import {fromMatch}  from '../actions'
import {Card} from '../components'
import {cardMap} from '../utils'


const mapStateToProps= (state, ownProps) => { console.log("own props in card: "+JSON.stringify(ownProps)); const mapId= ownProps.id; console.log("data: "+JSON.stringify(cardMap[mapId])); return (
	{
		handSize: ownProps.place==="market" ? 6 : getHandSize(state),
		data: cardMap[ownProps.id],
	}
) }

const mapDispatchToProps= (dispatch, ownProps) => ({
	openCardModal: (data) => dispatch(fromMatch.openCardModal(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Card)