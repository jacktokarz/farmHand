import React from 'react'
import PropTypes from 'prop-types'

import {} from '../utils'


const CardModal= ({actions, closeModal, id, vis}) => (
	<div style={{display: vis}} onClick= {closeModal}>A thing is here! {id}</div>
)

CardModal.propTypes = {

}

export default CardModal;