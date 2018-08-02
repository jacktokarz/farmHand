import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

import {CardModal} from '../containers'
import {} from '../utils'


const Card= ({openCardModal, handSize}) => (
    <img 
      className="card" 
      style={{"maxWidth": (100/handSize-1)+"%"}} 
      onClick={openCardModal} 
      src="https://preview.ibb.co/eoVC8o/cardBack.png" alt="cardBack"
    />

)

Card.propTypes = {

}

export default Card;