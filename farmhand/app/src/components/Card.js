import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { ModalWrapper } from 'react-redux-bootstrap-modal'

import {CardModal} from '../containers'
import {} from '../utils'


const Card= ({openCardModal, handSize, id}) => (
  <div>
    <img 
      className="card" 
      style={{"maxWidth": (100/handSize-1)+"%"}} 
      onClick={() => openCardModal(id)} 
      src="https://preview.ibb.co/eoVC8o/cardBack.png" alt="cardBack"
    />
    <ModalWrapper name="cardModal" component={CardModal}/>
  </div>


)

Card.propTypes = {

}

export default Card;