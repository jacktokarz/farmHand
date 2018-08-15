import React from 'react'
import PropTypes from 'prop-types'

import {ChoiceModal} from '../containers'
import {} from '../utils'


const CardModal= ({actions, cardId, closeModal, currentPlayerNumber, data, func, marketArray, matchPath, playArea, user, userPlayerNumber, vis}) => (

	<div style={{display: vis}} className="modal" onClick={ (event) => (!event.target.classList.contains("inside") ? closeModal() : "" ) }>
		<div className="modal-content inside" id="modalContent">
    		<div className="modal-header inside">
    			<span onClick={closeModal} className="close">&times;</span>
    		</div>
    		<div className="modal-body justify-content-around inside">
				<img className="modal-img inside" src={data.picture} alt={data.title} />
				{actions.map((i, index) => (
					<button 
						className="inside"
						style={{cursor: "pointer", display: (currentPlayerNumber===userPlayerNumber?"inline-block":"none")}} 
						onClick={ () => func(i, cardId, data, marketArray, matchPath, playArea, user, userPlayerNumber)}
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