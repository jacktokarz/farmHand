import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'


import {Card, CardModal, ChoiceModal, Field} from '../containers'
import {cardBackSrc, cardMap, grayBoxImg} from '../utils'


export default class Match extends React.Component {
	scrollToBottom = () => {
	  this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	}

	componentDidUpdate() {
	  this.scrollToBottom();
	}
	render() {
		return (
	<div className="App container-fluid" style={{"height": "99vh"}} >
   		<div className="row testingMatch" style={{"height": "100%"}}>
	   		<div className="col-sm-2 column noPadding" style={{"height": "100%"}}>
	   			<div className="bordered opponentFieldHolder" style={{"backgroundColor": this.props.matchPlayers[(this.props.userPlayerNumber+2)%3].color }}>
	   				{this.props.matchPlayers[(this.props.userPlayerNumber+2)%3].fields.map((i, index) => (
	   					<div className="bordered" style={{"maxHeight": "50%", "height": "50%"}}>
							<Field fieldData={i} isCurrentPlayer={this.props.currentPlayerNumber===(this.props.userPlayerNumber+2)%3} player={this.props.matchPlayers[(this.props.userPlayerNumber+2)%3]} />
						</div>
	   				))}
				</div>
	    		<div className="bordered opponentFieldBuffer" style={{"backgroundColor": this.props.matchPlayers[(this.props.userPlayerNumber+2)%3].color}}>
	    			<span className="bolded">{this.props.matchPlayers[(this.props.userPlayerNumber+2)%3].user}</span> 
	    			<img className="icon" src="https://image.ibb.co/ezytWU/plenty.png" style={{"display": this.props.matchPlayers[(this.props.userPlayerNumber+2)%3].user===null?"none":"inline-flex"}}/>
	    			<span className="bolded" style={{"display": this.props.matchPlayers[(this.props.userPlayerNumber+2)%3].user===null?"none":"inline-block"}}>: {this.props.matchPlayers[(this.props.userPlayerNumber+2)%3].counters.plenty}</span>
	    		</div>
	   			<div className="bordered opponentFieldHolder" style={{"backgroundColor": this.props.matchPlayers[(this.props.userPlayerNumber+1)%3].color}}>
					{this.props.matchPlayers[(this.props.userPlayerNumber+1)%3].fields.map((i, index) => (
						<div className="bordered" style={{"maxHeight": "50%", "height": "50%"}}>
							<Field fieldData={i} isCurrentPlayer={this.props.currentPlayerNumber===(this.props.userPlayerNumber+1)%3} player={this.props.matchPlayers[(this.props.userPlayerNumber+1)%3]} />
						</div>
	   				))}
	    		</div>
	    		<div className="bordered opponentFieldBuffer" style={{"backgroundColor": this.props.matchPlayers[(this.props.userPlayerNumber+1)%3].color}}>
	    			<span className="bolded">{this.props.matchPlayers[(this.props.userPlayerNumber+1)%3].user}</span> 
	    			<img className="icon" src="https://image.ibb.co/ezytWU/plenty.png" style={{"display": this.props.matchPlayers[(this.props.userPlayerNumber+1)%3].user===null?"none":"inline-flex"}} />
	    			<span className="bolded" style={{"display": this.props.matchPlayers[(this.props.userPlayerNumber+1)%3].user===null?"none":"inline-block"}}>: {this.props.matchPlayers[(this.props.userPlayerNumber+1)%3].counters.plenty}</span>
	    		</div>
	   		</div>
	    	<div className="col-sm-7 column noPadding">
	    		<div className=" bordered row" style= {{"height": "25%"}}>
	    			<div className="col-sm-10">
	    				<Card  place="market" id={this.props.marketArray[0]} counters= {this.props.matchPlayers[this.props.userPlayerNumber].counters} />
		    			<Card  place="market" id={this.props.marketArray[1]} counters= {this.props.matchPlayers[this.props.userPlayerNumber].counters} />
		    			<Card  place="market" id={this.props.marketArray[2]} counters= {this.props.matchPlayers[this.props.userPlayerNumber].counters} />
		    			<Card  place="market" id={this.props.marketArray[3]} counters= {this.props.matchPlayers[this.props.userPlayerNumber].counters} />
		    			<Card  place="market" id={this.props.marketArray[4]} counters= {this.props.matchPlayers[this.props.userPlayerNumber].counters} />
		    			<Card place="hiddenMarket" id={this.props.marketArray[5]} />
		    		</div>
		    		<div className="col-sm-2">
		    			<div className="starterFieldAndPlenty">
		    				<div 
		    					className="marketObject surrounded"
		    					style= {{width: "-webkit-fill-available", cursor: this.props.matchPlayers[this.props.userPlayerNumber].counters.coin<2?"default":"pointer"}}
		    					onClick={() => this.props.matchPlayers[this.props.userPlayerNumber].counters.coin<2?"":this.props.buyMarketStarterField(this.props.logLength, this.props.marketArray, this.props.matchPath, this.props.matchPlayers[this.props.userPlayerNumber], this.props.userPlayerNumber)}
		    				>
		    					Starter Field
		    				</div>
		    				<div 
		    					className="marketObject surrounded"
		    					style={{width: "-webkit-fill-available", cursor: this.props.matchPlayers[this.props.userPlayerNumber].counters.coin<5?"default":"pointer"}}
		    					onClick={() => this.props.matchPlayers[this.props.userPlayerNumber].counters.coin<5?"":this.props.buyMarketPlenty(this.props.logLength, this.props.matchPath, this.props.userPlayerNumber, this.props.matchPlayers[this.props.userPlayerNumber])}
		    				>
		    					Plenty
		    				</div>
		    			</div>
		    		</div>
	    		</div>
	    		<div className=" bordered" style= {{height: "38%", "backgroundColor": this.props.matchPlayers[this.props.currentPlayerNumber].color }}>
	    			<div style={{display: "flow-root", height: "12%"}}>
	    				<div style={{float: "left", margin: "6px 3px 0 6px"}}><span style= {{fontStyle: "italic"}}>Turn {this.props.turnCount}: </span> {this.props.matchPlayers[this.props.currentPlayerNumber].user}'s Play Area</div>
	    				<div style={{float: "right"}}>
	    					<img className="icon" src="https://image.ibb.co/nwjNQp/coin.png" />: {this.props.matchPlayers[this.props.currentPlayerNumber].counters.coin}
	    					<img className="icon" src="https://image.ibb.co/gOBfBU/plant.png" />: {this.props.matchPlayers[this.props.currentPlayerNumber].counters.plant} 
	    					<img className="icon" src="https://image.ibb.co/gZzp5p/harvest.png" />: {this.props.matchPlayers[this.props.currentPlayerNumber].counters.harvest} 
	    					<img className="icon" src="https://image.ibb.co/ggp0BU/scrap.png" />: {this.props.matchPlayers[this.props.currentPlayerNumber].counters.scrap} 
	    					<img className="icon" src="https://image.ibb.co/icF7rU/market_Scrap.png" />: {this.props.matchPlayers[this.props.currentPlayerNumber].counters.marketScrap}
	    				</div>
	    				<div className=" bordered" style= {{height: "5%", float: "right", margin: "6px 3px 0 6px", "backgroundColor": this.props.matchPlayers[this.props.userPlayerNumber].color}}>
			    			<button style={{cursor: "pointer", float: "right", display: this.props.userPlayerNumber===this.props.currentPlayerNumber ? "inline-block" : "none"}} onClick={() => this.props.endTurn(this.props.currentPlayerNumber, this.props.matchPlayers[this.props.userPlayerNumber], this.props.matchPath, this.props.numberOfPlayers, this.props.playArea, this.props.turnCount)}>End Turn</button>
			    		</div>
	    			</div>
	    			<div className="matchLog" style= {{"width": "25%", "height": "85%"}}>
	    				{this.props.matchLog===null?"":this.props.matchLog.map((i, index) => (
	    					<p><span className="bolded" style={{"fontSize": "14px"}}>{i.user}: </span>{i.message}</p>
	    				))}
	    				<div style={{ float:"left", clear: "both" }}
	             			ref={(el) => { this.messagesEnd = el; }}>
				        </div>
	    			</div>
	    			<div style= {{"width": "74%", "height": "88%", "float": "right"}}>
		    			{this.props.playArea.map((i, index) => (
		    				<Card place="playArea" id={i} />
		    			))}
	    			</div>
	    		</div>
	    		<div className=" bordered" style= {{"height": "35%", "backgroundColor": this.props.matchPlayers[this.props.userPlayerNumber].color}}>
	    			<div style= {{"float": "initial", height: "96%", padding: "2%"}} >
		    			{this.props.matchPlayers[this.props.userPlayerNumber].hand.map((i, index) => (
							<Card  place="userHand" id={i} counters= {this.props.matchPlayers[this.props.userPlayerNumber].counters} />
						))}
		    		</div>
				</div>
	    	</div>
	    	<div className="col-sm-3 column noPadding">
	    		<div className="bordered" style= {{"maxHeight": "20%", "height": "20%"}}>
	    			<Field fieldData={this.props.communityField} isCurrentPlayer={this.props.currentPlayerNumber===this.props.userPlayerNumber} player={this.props.matchPlayers[this.props.userPlayerNumber]} />
	    		</div>
	    		<div className="bordered" style= {{"maxHeight": "55%", "height": "55%", "backgroundColor": this.props.matchPlayers[this.props.userPlayerNumber].color}}>
					{this.props.matchPlayers[this.props.userPlayerNumber].fields.map((i, index) => (
						<div className="bordered" style={{"maxHeight": "50%", "height": "50%"}}>
							<Field fieldData={i} isCurrentPlayer={this.props.currentPlayerNumber===this.props.userPlayerNumber} player={this.props.matchPlayers[this.props.userPlayerNumber]} />
						</div>
	   				))}	    			
	    		</div>
	    		<div className=" bordered" style={{"maxHeight": "3%", "height": "3%", "backgroundColor": this.props.matchPlayers[this.props.userPlayerNumber].color}}></div>
	    		<div className=" bordered" style= {{"maxHeight": "20%", "height": "20%", "padding": "3%", "backgroundColor": this.props.matchPlayers[this.props.userPlayerNumber].color}}>
	    			<span className="bolded">{this.props.matchPlayers[this.props.userPlayerNumber].user}</span>
	    			<img className= "icon" src="https://image.ibb.co/ezytWU/plenty.png" />
	    			<span className="bolded">: {this.props.matchPlayers[this.props.userPlayerNumber].counters.plenty}</span>
	    			<br />
	    			<img className="card" src={cardBackSrc} style={{"marginRight": "5%"}} alt="deck" />
	    			<div className="textOverImage" style={{"left": "38%"}}>{this.props.matchPlayers[this.props.userPlayerNumber].deck===null ? 0 : this.props.matchPlayers[this.props.userPlayerNumber].deck.length}</div>
	    			<img className="card" src={(this.props.matchPlayers[this.props.userPlayerNumber].discard===undefined || this.props.matchPlayers[this.props.userPlayerNumber].discard.length===0)?grayBoxImg:cardMap[this.props.matchPlayers[this.props.userPlayerNumber].discard[this.props.matchPlayers[this.props.userPlayerNumber].discard.length-1]].picture} alt="Discard" />
    				<div className="textOverImage" style={{"left": "62%"}}>{this.props.matchPlayers[this.props.userPlayerNumber].discard===null ? 0 : this.props.matchPlayers[this.props.userPlayerNumber].discard.length}</div>
	    		</div>
	    	</div>
	    	<CardModal />
			<ChoiceModal />
	    </div>
	</div>
		)
	}
}