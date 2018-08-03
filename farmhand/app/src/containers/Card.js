import React from 'react'
import { connect } from 'react-redux'
import {getHandSize} from '../selectors'
import {fromMatch}  from '../actions'
import {Card} from '../components'
import {marketMap} from '../utils'


const mapStateToProps= (state, ownProps) => { console.log("own props in card: "+JSON.stringify(ownProps)); const mapId= ownProps.id; console.log("data: "+JSON.stringify(marketMap[mapId])); return (
	{
		handSize: ownProps.place==="market" ? 6 : getHandSize(state),
		data: marketMap[ownProps.id],
	}
) }

const mapDispatchToProps= (dispatch, ownProps) => ({
	openCardModal: (data) => dispatch(fromMatch.openCardModal(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Card)