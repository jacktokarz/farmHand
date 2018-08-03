import React from 'react'
import { connect } from 'react-redux'
import {getCardModalActions, getCardModalData, getCardModalVis, getHandSize, getMarketArray, getUserHandArray} from '../selectors'
import {fromMatch} from '../actions'
import {Match} from '../components'
import {} from '../utils'


const mapStateToProps= state => ({
	cardModalActions: getCardModalActions(state),
	cardModalData: getCardModalData(state),
	cardModalVis: getCardModalVis(state),
	handSize: getHandSize(state),
	marketArray: getMarketArray(state),
	userHandArray: getUserHandArray(state),
})

const mapDispatchToProps= dispatch => ({
	closeModal: () => dispatch(fromMatch.closeCardModal()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Match)