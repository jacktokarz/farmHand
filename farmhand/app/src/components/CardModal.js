import React from 'react'
import PropTypes from 'prop-types'

import {} from '../utils'


const CardModal= ({actions, closeModal, currentPlayerNumber, data, func, userPlayerNumber, vis}) => (

	<div style={{display: vis}} className="modal" onClick={ (event) => (!event.target.classList.contains("inside") ? closeModal() : "" ) }>
		<div className="modal-content inside" id="modalContent">
    		<div className="modal-header inside">
    			<span onClick={closeModal} className="close">&times;</span>
    		</div>
    		<div className="modal-body justify-content-around inside">
				<img className="modal-img inside" src={data.picture} alt={data.title} />
				{actions.map((i, index) => (
					<button style={{display: (currentPlayerNumber===userPlayerNumber?"inline-block":"none")}} onClick={ () => func(i)} >{i}</button>
				)) }
			</div>
    	</div>
    </div>
)

CardModal.propTypes = {

}

export default CardModal;