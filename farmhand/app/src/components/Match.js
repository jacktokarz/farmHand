import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

import cardBack from '../images/cardBack.png'

import {Card} from '../containers'
import {getCookie, getMatchPlayers} from '../utils'


const user = getCookie('user');
const matchId= getCookie('match');
const players= getMatchPlayers(matchId);


const Match= ({cardModalActions, cardModalId, cardModalVis, currentPlayer, history, market, marketDeck, trashPile, userHand}) => (
	<div className="App container-fluid" style={{"height": "99vh"}}>
   		<div className="row testingMatch" style={{"height": "100%"}}>
	   		<div className="col-sm-2">
	   			<div style={{"height": "45%"}}>
					<img className="field" src="https://preview.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    			<img className="field" src="https://preview.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
				</div>
	    		<div style={{"height": "5%"}}>Player 3 Info</div>
	   			<div style={{"height": "45%"}}>
					<img className="field" src="https://preview.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    			<img className="field" src="https://preview.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    		</div>
	    		<div style={{"height": "5%"}}>Player 2 Info</div>
	   		</div>
	    	<div className="col-sm-7">
	    		<div style= {{"height": "30%"}} className="market">
	    			<Card key={market[0]} place="market" id={market[0]} />
	    			<Card key={market[1]} place="market" id={market[1]} />
	    			<Card key={market[2]} place="market" id={market[2]} />
	    			<Card key={market[3]} place="market" id={market[3]} />
	    			<Card key={market[4]} place="market" id={market[4]} />
	    			<div className="starterFieldAndPlenty" style={{"maxWidth": (100/6-1)+"%"}}>
	    				<div className="marketObject" >Starter Field</div>
	    				<div className="marketObject" >Plenty</div>
	    			</div>
	    		</div>
	    		<div style= {{"height": "35%"}}>Play Area</div>
	    		<div style= {{"height": "5%"}}>Stats and Buttons</div>
	    		<div style= {{"height": "30%"}} className="yourHand">
	    			<Card key={userHand[0]} place="userHand" id={userHand[0]} />
	    			<Card key={userHand[1]} place="userHand" id={userHand[1]} />
	    			<Card key={userHand[2]} place="userHand" id={userHand[2]} />
	    			<Card key={userHand[3]} place="userHand" id={userHand[3]} />
	    			<Card key={userHand[4]} place="userHand" id={userHand[4]} />
	    		</div>
	    	</div>
	    	<div className="col-sm-3">
	    		<div style= {{"height": "25%"}}>
	    			<img className="communityField" src="https://preview.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    		</div>
	    		<div style= {{"height": "50%"}}>
	    			<img className="field" src="https://preview.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    			<img className="field" src="https://preview.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />	    			
	    		</div>
	    		<div style={{"height": "5%"}}>Buffer Zone</div>
	    		<div style= {{"height": "20%"}}>
	    			<img className="yourDeck" src="https://preview.ibb.co/eoVC8o/cardBack.png" alt="cardBack" />
	    			<img className="yourDiscard" src="https://preview.ibb.co/j6WSR8/Recycle.png" alt="Recycle" />
	    		</div>
	    	</div>
	    </div>
	</div>
)

Match.propTypes = {

}

export default Match;