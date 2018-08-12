import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'


import {Card, CardModal} from '../containers'
import {cardBackSrc} from '../utils'


const Match= 
	({
		currentPlayerNumber,
		endTurn,
		history, 
		market, 
		marketArray,
		matchPath,
		matchPlayers,
		numberOfPlayers,
		playArea,
		playField,
		trashPile,
		userPlayerNumber,
	}) => (
	<div className="App container-fluid" style={{"height": "99vh"}} >
   		<div className="row testingMatch" style={{"height": "100%"}}>
	   		<div className="col-sm-2 column">
	   			<div style={{"height": "45%", "backgroundColor": matchPlayers[(userPlayerNumber+2)%3].color }}>
	   				{matchPlayers[(userPlayerNumber+2)%3].fields.map((i, index) => (
						<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />				
	   				))}
				</div>
	    		<div style={{"height": "5%", "backgroundColor": matchPlayers[(userPlayerNumber+2)%3].color}}>
	    			{matchPlayers[(userPlayerNumber+2)%3].user} 
	    			<img className="icon" src="https://image.ibb.co/ezytWU/plenty.png" />: {matchPlayers[(userPlayerNumber+2)%3].counters.plenty}
	    		</div>
	   			<div style={{"height": "45%", "backgroundColor": matchPlayers[(userPlayerNumber+1)%3].color}}>
					{matchPlayers[(userPlayerNumber+1)%3].fields.map((i, index) => (
						<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />				
	   				))}
	    		</div>
	    		<div style={{"height": "5%", "backgroundColor": matchPlayers[(userPlayerNumber+1)%3].color}}>
	    			{matchPlayers[(userPlayerNumber+1)%3].user} 
	    			<img className="icon" src="https://image.ibb.co/ezytWU/plenty.png" />: {matchPlayers[(userPlayerNumber+1)%3].counters.plenty}
	    		</div>
	   		</div>
	    	<div className="col-sm-7 column">
	    		<div style= {{"height": "30%"}} className="market">
	    			<Card  place="market" id={marketArray[0]} />
	    			<Card  place="market" id={marketArray[1]} />
	    			<Card  place="market" id={marketArray[2]} />
	    			<Card  place="market" id={marketArray[3]} />
	    			<Card  place="market" id={marketArray[4]} />
	    			<Card place="hiddenMarket" id={marketArray[5]} />
	    			<div className="starterFieldAndPlenty" style={{"maxWidth": (100/6-1)+"%"}}>
	    				<div className="marketObject" >Starter Field</div>
	    				<div className="marketObject" >Plenty</div>
	    			</div>
	    		</div>
	    		<div style= {{height: "35%", "backgroundColor": matchPlayers[currentPlayerNumber].color }}>
	    			<div style={{display: "flow-root"}}>
	    				<div style={{float: "left"}}>{matchPlayers[currentPlayerNumber].user}'s Play Area</div>
	    				<div style={{float: "right"}}>
	    					<img className="icon" src="https://image.ibb.co/nwjNQp/coin.png" />: {matchPlayers[currentPlayerNumber].counters.coin} 
	    					<img className="icon" src="https://image.ibb.co/gOBfBU/plant.png" />: {matchPlayers[currentPlayerNumber].counters.plant} 
	    					<img className="icon" src="https://image.ibb.co/gZzp5p/harvest.png" />: {matchPlayers[currentPlayerNumber].counters.harvest} 
	    					<img className="icon" src="https://image.ibb.co/ggp0BU/scrap.png" />: {matchPlayers[currentPlayerNumber].counters.scrap} 
	    					<img className="icon" src="https://image.ibb.co/icF7rU/market_Scrap.png" />: {matchPlayers[currentPlayerNumber].counters.marketScrap}
	    				</div>
	    			</div>
	    			{playArea.map((i, index) => (
	    				<Card place="playArea" id={i} />
	    			))}
	    		</div>
	    		<div style= {{height: "5%", "backgroundColor": matchPlayers[userPlayerNumber].color}}>
	    			<div style={{float: "left", display: "inline-block"}}>{matchPlayers[userPlayerNumber].user}: {userPlayerNumber}</div>
	    			<button style={{float: "right", display: userPlayerNumber===currentPlayerNumber ? "inline-block" : "none"}} onClick={() => endTurn(currentPlayerNumber, matchPlayers[userPlayerNumber], matchPath, numberOfPlayers, playArea, userPlayerNumber)}>End Turn</button>
	    		</div>
	    		<div style= {{"height": "30%", "backgroundColor": matchPlayers[userPlayerNumber].color}} className="yourHand">
	    			{matchPlayers[userPlayerNumber].hand.map((i, index) => (
						<Card  place="userHand" id={i} />
					))}
	    		</div>
	    	</div>
	    	<div className="col-sm-3 column">
	    		<div style= {{"height": "25%"}}>
	    			<img className="communityField" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />
	    		</div>
	    		<div style= {{"height": "50%", "backgroundColor": matchPlayers[userPlayerNumber].color}}>
					{matchPlayers[userPlayerNumber].fields.map((i, index) => (
						<img className="field" src="https://image.ibb.co/dbVwm8/Modest_Plot.png" alt="Modest_Plot" />				
	   				))}	    			
	    		</div>
	    		<div style={{"height": "5%", "backgroundColor": matchPlayers[userPlayerNumber].color}}>Buffer Zone</div>
	    		<div style= {{"height": "20%", "backgroundColor": matchPlayers[userPlayerNumber].color}}>
	    			<img className= "icon" src="https://image.ibb.co/ezytWU/plenty.png" />: {matchPlayers[userPlayerNumber].counters.plenty}
	    			<div className="userDeckArea">
		    			<img className="yourDeck" src={cardBackSrc} alt="cardBack" />
		    			<div className="textOverImage">{matchPlayers[userPlayerNumber].deck===null ? 0 : matchPlayers[userPlayerNumber].deck.length}</div>
		    			<img className="yourDiscard" src="https://image.ibb.co/j6WSR8/Recycle.png" alt="Recycle" />
		    		</div>
		    		<button onClick={() => playField(10, matchPath, userPlayerNumber)}>Play Field</button>
	    		</div>
	    	</div>
	    	<CardModal />
	    </div>
	</div>
	)

Match.propTypes = {

}

export default Match;