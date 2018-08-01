import React from 'react'
import { connect } from 'react-redux'
import {getCardModalActions, getCardModalId, getCardModalVis, getHandSize, getMarket, getUserHand} from '../selectors'
import {fromMatch} from '../actions'
import {Match} from '../components'
import {} from '../utils'


const mapStateToProps= state => ({
	cardModalActions: getCardModalActions(state),
	cardModalId: getCardModalId(state),
	cardModalVis: getCardModalVis(state),
	handSize: getHandSize(state),
	market: getMarket(state),
	userHand: getUserHand(state),
})

const mapDispatchToProps= dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Match)