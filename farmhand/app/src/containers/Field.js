import React from 'react'
import { connect } from 'react-redux'
import {Field} from '../components'
import {cardMap} from '../utils'




const mapStateToProps= (state, ownProps) => { console.log("own props in card: "+JSON.stringify(ownProps)); return (
	{
		data: cardMap[ownProps.id],
	}
) }

const mapDispatchToProps= (dispatch, ownProps) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(Field)