import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

import {CardModal} from '../containers'
import {cardBackSrc} from '../utils'


const Card= ({actions, data, handSize, openCardModal, place}) => (
    <img 
      className="card" 
      style={{"maxWidth": (100/handSize-1)+"%", "display": (place==="hiddenMarket"?"none":"inline-block"), cursor: (place!=="playArea"?"pointer":"default") }} 
      onClick={() => (place!=="playArea"?openCardModal(actions, data):null)} 
      src={data.picture}
    />

)

Card.propTypes = {

}

export default Card;