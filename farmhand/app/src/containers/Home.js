import React from 'react'
import { connect } from 'react-redux'
import {fromHeader} from '../actions'
import {Home} from '../components'
import {openRules} from '../utils'


const mapStateToProps= state => (
	{}
)

const mapDispatchToProps= dispatch => ({
	openLoginFromPlay: () => { dispatch(fromHeader.openLoginFromPlay()); },
	playRedirect: history => { history.push('/lobby') },
	openRules: () => {openRules(); },
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)