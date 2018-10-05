import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

import {cropPicture} from '../utils'


const Field= ({crops, data, harvestable, harvestCrop, matchPath, playArea, playerNumber}) => (
	<div style={{maxHeight: "40%", marginBottom: "10%" }}>
	    <img 
	      className="field"
	      src={data.picture}
	    />
	    <img
	    	className="crops"
	    	style={{cursor: harvestable?"pointer":"default"}}
	    	src={cropPicture}
	    	onClick={() => harvestable?harvestCrop(matchPath, playArea, playerNumber):null}
	    />
	    <div className="textOverField" >{crops.length}</div>
    </div>
)


export default Field;