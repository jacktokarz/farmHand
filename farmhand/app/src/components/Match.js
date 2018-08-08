import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'


import {Card, CardModal} from '../containers'
import {cardBackSrc} from '../utils'


const Match= 
	({
		currentPlayer,
		endTurn,
		history, 
		market, 
		marketArray,
		matchPath,
		matchPlayers,
		nextPlayerDeck,
		nextPlayerDiscard,
		nextPlayerHand,
		nextPlayer,
		previousPlayerDeck,
		previousPlayerDiscard,
		previousPlayerHand,
		previousPlayer,
		trashPile,
		userColor,
		userDeck,
		userDiscard,
		userHand,
		user,
		userPlayerNumber,
	}) => (
	<div className="App container-fluid" style={{"height": "99vh"}} >
   		<div className="row testingMatch" style={{"height": "100%"}}>
	   		<div className="col-sm-2 column">
	   			<div style={{"height": "45%", "background-color": previousPlayer.color }}>
					<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    			<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
				</div>
	    		<div style={{"height": "5%", "background-color": previousPlayer.color}}>{previousPlayer.user} Info</div>
	   			<div style={{"height": "45%", "background-color": nextPlayer.color}}>
					<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    			<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    		</div>
	    		<div style={{"height": "5%", "background-color": nextPlayer.color}}>{nextPlayer.user} Info</div>
	   		</div>
	    	<div className="col-sm-7 column">
	    		<div style= {{"height": "30%"}} className="market">
	    			<Card  place="market" id={marketArray[0]} />
	    			<Card  place="market" id={marketArray[1]} />
	    			<Card  place="market" id={marketArray[2]} />
	    			<Card  place="market" id={marketArray[3]} />
	    			<Card  place="market" id={marketArray[4]} />
	    			<div className="starterFieldAndPlenty" style={{"maxWidth": (100/6-1)+"%"}}>
	    				<div className="marketObject" >Starter Field</div>
	    				<div className="marketObject" >Plenty</div>
	    			</div>
	    		</div>
	    		<div style= {{"height": "35%", "background-color": (currentPlayer===userPlayerNumber?userColor:(currentPlayer===nextPlayer.playerNumber?nextPlayer.color:previousPlayer.color) )}}>Play Area</div>
	    		<div style= {{"height": "5%", "background-color": userColor}}>
	    			{user}: {userPlayerNumber} 
	    			<button style={{display: userPlayerNumber===currentPlayer ? "inline-block" : "none"}} onClick={() => endTurn(currentPlayer, userDeck, userDiscard, userHand, matchPath, matchPlayers.length, userPlayerNumber)}>End Turn</button>
	    		</div>
	    		<div style= {{"height": "30%", "background-color": userColor}} className="yourHand">
	    			{userHand.map((i, index) => (
						<Card  place="userHand" id={i} />
					))}
	    		</div>
	    	</div>
	    	<div className="col-sm-3 column">
	    		<div style= {{"height": "25%"}}>
	    			<img className="communityField" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    		</div>
	    		<div style= {{"height": "50%", "background-color": userColor}}>
	    			<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    			<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />	    			
	    		</div>
	    		<div style={{"height": "5%", "background-color": userColor}}>Buffer Zone</div>
	    		<div style= {{"height": "20%", "background-color": userColor}}>
	    			<div className="userDeckArea">
		    			<img className="yourDeck" src={cardBackSrc} alt="cardBack" />
		    			<div className="textOverImage">{userDeck===null ? 0 : userDeck.length}</div>
		    			<img className="yourDiscard" src="https://image.ibb.co/j6WSR8/Recycle.png" alt="Recycle" />
		    		</div>
	    		</div>
	    	</div>
	    	<CardModal />
	    </div>
	</div>
	)

Match.propTypes = {

}

export default Match;