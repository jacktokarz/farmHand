import { connect } from 'react-redux'
import {Lobby} from '../components'
import {getMatches, createMatch} from '../utils'

const matchResults= getMatches();
console.log("match results: "+matchResults);

const mapStateToProps= state => (
	{
		matches: matchResults === undefined ? ["banana", "orange"] : matchResults,
	}
)

const mapDispatchToProps= dispatch => ({
	createMatch: () => { createMatch(); },
})

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)