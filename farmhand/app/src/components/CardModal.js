import React from 'react'
import PropTypes from 'prop-types'

import {} from '../utils'


const CardModal= ({actions, closeModal, id, vis}) => (




	<div style={{display: vis}} className="modal">
		<div className="modal-content">
    		<div className="modal-header">
    			<span onClick={closeModal} className="close">&times;</span>
    		</div>
    		<div className="modal-body">
				<div>Here's the info for {id}</div>
			</div>
    	</div>
    </div>
)

CardModal.propTypes = {

}

export default CardModal;