import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'


import {Card, CardModal, ChoiceModal, Field} from '../containers'
import {cardBackSrc, cardMap, grayBoxImg} from '../utils'


const Match= 
	({
		buyMarketPlenty,
		buyMarketStarterField,
		communityField,
		currentPlayerNumber,
		endTurn,
		market, 
		marketArray,
		matchPath,
		matchPlayers,
		numberOfPlayers,
		playArea,
		trashPile,
		turnCount,
		userPlayerNumber,
	}) => (
	<div className="App container-fluid" style={{"height": "99vh"}} >
   		<div className="row testingMatch" style={{"height": "100%"}}>
	   		<div className="col-sm-2 column noPadding">
	   			<div className="bordered" style={{"height": "45%", "backgroundColor": matchPlayers[(userPlayerNumber+2)%3].color }}>
	   				{matchPlayers[(userPlayerNumber+2)%3].fields.map((i, index) => (
						<Field fieldData={i} isCurrentPlayer={currentPlayerNumber===(userPlayerNumber+2)%3} player={matchPlayers[(userPlayerNumber+2)%3]} />				
	   				))}
				</div>
	    		<div className="bordered" style={{"height": "5%", "backgroundColor": matchPlayers[(userPlayerNumber+2)%3].color}}>
	    			{matchPlayers[(userPlayerNumber+2)%3].user} 
	    			<img className="icon" src="https://image.ibb.co/ezytWU/plenty.png" style={{"display": matchPlayers[(userPlayerNumber+2)%3].user===null?"none":"inline-flex"}}/>
	    				: {matchPlayers[(userPlayerNumber+2)%3].counters.plenty}
	    		</div>
	   			<div className="bordered" style={{"height": "45%", "backgroundColor": matchPlayers[(userPlayerNumber+1)%3].color}}>
					{matchPlayers[(userPlayerNumber+1)%3].fields.map((i, index) => (
						<Field fieldData={i} isCurrentPlayer={currentPlayerNumber===(userPlayerNumber+1)%3} player={matchPlayers[(userPlayerNumber+1)%3]} />
	   				))}
	    		</div>
	    		<div className="bordered" style={{"height": "5%", "backgroundColor": matchPlayers[(userPlayerNumber+1)%3].color}}>
	    			{matchPlayers[(userPlayerNumber+1)%3].user} 
	    			<img className="icon" src="https://image.ibb.co/ezytWU/plenty.png" style={{"display": matchPlayers[(userPlayerNumber+1)%3].user===null?"none":"inline-flex"}} />
	    				: {matchPlayers[(userPlayerNumber+1)%3].counters.plenty}
	    		</div>
	   		</div>
	    	<div className="col-sm-7 column noPadding">
	    		<div className=" bordered" style= {{"height": "30%"}}>
	    			<Card  place="market" id={marketArray[0]} counters= {matchPlayers[userPlayerNumber].counters} />
	    			<Card  place="market" id={marketArray[1]} counters= {matchPlayers[userPlayerNumber].counters} />
	    			<Card  place="market" id={marketArray[2]} counters= {matchPlayers[userPlayerNumber].counters} />
	    			<Card  place="market" id={marketArray[3]} counters= {matchPlayers[userPlayerNumber].counters} />
	    			<Card  place="market" id={marketArray[4]} counters= {matchPlayers[userPlayerNumber].counters} />
	    			<Card place="hiddenMarket" id={marketArray[5]} />
	    			<div className="starterFieldAndPlenty" style={{"maxWidth": (100/6-1)+"%"}}>
	    				<div 
	    					className="marketObject"
	    					style= {{cursor: matchPlayers[userPlayerNumber].counters.coin<2?"default":"pointer"}}
	    					onClick={() => matchPlayers[userPlayerNumber].counters.coin<2?"":buyMarketStarterField(marketArray, matchPath, matchPlayers[userPlayerNumber], userPlayerNumber)}
	    				>
	    					Starter Field
	    				</div>
	    				<div 
	    					className="marketObject"
	    					style={{cursor: matchPlayers[userPlayerNumber].counters.coin<5?"default":"pointer"}}
	    					onClick={() => matchPlayers[userPlayerNumber].counters.coin<5?"":buyMarketPlenty(matchPath, userPlayerNumber, matchPlayers[userPlayerNumber])}
	    				>
	    					Plenty
	    				</div>
	    			</div>
	    		</div>
	    		<div className=" bordered" style= {{height: "35%", "backgroundColor": matchPlayers[currentPlayerNumber].color }}>
	    			<div style={{display: "flow-root"}}>
	    				<div style={{float: "left", marginLeft: "5%"}}><span style= {{fontStyle: "italic"}}>Turn {turnCount}: </span> {matchPlayers[currentPlayerNumber].user}'s Play Area</div>
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
	    		<div className=" bordered" style= {{height: "5%", "backgroundColor": matchPlayers[userPlayerNumber].color}}>
	    			<button style={{cursor: "pointer", float: "right", display: userPlayerNumber===currentPlayerNumber ? "inline-block" : "none"}} onClick={() => endTurn(currentPlayerNumber, matchPlayers[userPlayerNumber], matchPath, numberOfPlayers, playArea, turnCount)}>End Turn</button>
	    		</div>
	    		<div className=" bordered" style= {{"height": "30%", "backgroundColor": matchPlayers[userPlayerNumber].color}}>
	    			{matchPlayers[userPlayerNumber].hand.map((i, index) => (
						<Card  place="userHand" id={i} counters= {matchPlayers[userPlayerNumber].counters} />
					))}
	    		</div>
	    	</div>
	    	<div className="col-sm-3 column noPadding">
	    		<div className=" bordered" style= {{"height": "25%"}}>
	    			<Field fieldData={communityField} isCurrentPlayer={currentPlayerNumber===userPlayerNumber} player={matchPlayers[userPlayerNumber]} />
	    		</div>
	    		<div className=" bordered" style= {{"height": "50%", "backgroundColor": matchPlayers[userPlayerNumber].color}}>
					{matchPlayers[userPlayerNumber].fields.map((i, index) => (
						<Field fieldData={i} isCurrentPlayer={currentPlayerNumber===userPlayerNumber} player={matchPlayers[userPlayerNumber]} />
	   				))}	    			
	    		</div>
	    		<div className=" bordered" style={{"height": "5%", "backgroundColor": matchPlayers[userPlayerNumber].color}}></div>
	    		<div className=" bordered" style= {{"height": "20%", "backgroundColor": matchPlayers[userPlayerNumber].color}}>
	    			{matchPlayers[userPlayerNumber].user}
	    			<img className= "icon" src="https://image.ibb.co/ezytWU/plenty.png" />: {matchPlayers[userPlayerNumber].counters.plenty}
	    			<br />
	    			<img className="card" src={cardBackSrc} style={{"marginRight": "5%"}} alt="deck" />
	    			<div className="textOverImage" style={{"left": "33%"}}>{matchPlayers[userPlayerNumber].deck===null ? 0 : matchPlayers[userPlayerNumber].deck.length}</div>
	    			<img className="card" src={(matchPlayers[userPlayerNumber].discard===undefined || matchPlayers[userPlayerNumber].discard.length===0)?grayBoxImg:cardMap[matchPlayers[userPlayerNumber].discard[matchPlayers[userPlayerNumber].discard.length-1]].picture} alt="Discard" />
    				<div className="textOverImage" style={{"left": "67%"}}>{matchPlayers[userPlayerNumber].discard===null ? 0 : matchPlayers[userPlayerNumber].discard.length}</div>
	    		</div>
	    	</div>
	    	<CardModal />
			<ChoiceModal />
	    </div>
	</div>
	)

Match.propTypes = {

}

export default Match;