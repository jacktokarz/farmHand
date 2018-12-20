import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

import {cropPicture} from '../utils'


const Field= ({crops, data, harvestable, harvestCrop, marketArray, matchPath, openCardModal, playArea, playerNumber}) => (
	<div className="fieldDiv">
	    <img 
	      className="fieldImg"
	      style={{cursor: "pointer"}}
	      onClick= {() => openCardModal([], data)}
	      src={data.picture}
	    />
	    <img
	    	className="cropsImg"
	    	style={{cursor: harvestable?"pointer":"default"}}
	    	src={cropPicture}
	    	onClick={() => harvestable?harvestCrop(marketArray, matchPath, playArea, playerNumber):null}
	    />
	    <div className="textOverField" >{crops.length}</div>
    </div>
)


export default Field;