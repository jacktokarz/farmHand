import React from 'react'
import PropTypes from 'prop-types'

import {ChoiceModal} from '../containers'
import {} from '../utils'


const CardModal= ({actions, cardId, closeModal, communityField, currentPlayerNumber, data, func, logLength, marketArray, matchPath, playArea, totalCrops, trashArray, user, userPlayerNumber, vis}) => (

	<div style={{display: vis}} className="modal" onClick={ (event) => (!event.target.classList.contains("inside") ? closeModal() : "" ) }>
		<div className="clear-modal-content" id="modalContent">
			<img className="modal-img inside" src={data.picture} alt={data.title} />
			<div className="modalButtons inside">
				{actions.map((i, index) => (
					<button 
						className="inside modal-button"
						style={{cursor: "pointer", display: (currentPlayerNumber===userPlayerNumber?"inline-block":"none")}} 
						onClick={ () => func(i, cardId, communityField, logLength, marketArray, matchPath, playArea, totalCrops, trashArray, user, userPlayerNumber)}
					>
						{i}
					</button>
				)) }
			</div>
    	</div>
    </div>
)

CardModal.propTypes = {

}

export default CardModal;