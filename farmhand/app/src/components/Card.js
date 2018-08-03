import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

import {CardModal} from '../containers'
import {cardBackSrc} from '../utils'


const Card= ({data, handSize, openCardModal}) => (
    <img 
      className="card" 
      style={{"maxWidth": (100/handSize-1)+"%"}} 
      onClick={() => openCardModal(data)} 
      src={data.picture}
    />

)

Card.propTypes = {

}

export default Card;