import React from 'react'
import PropTypes from 'prop-types'

import {} from '../utils'


const ChoiceModal= ({cardModalId, closeModal, func, matchPath, options, parentInfo, playArea, title, user, userPlayerNumber, vis}) => (

	<div style={{display: vis}} className="modal" onClick={ (event) => (!event.target.classList.contains("inside") ? closeModal() : "" ) }>
		<div className="modal-content inside" id="modalContent">
    		<div className="modal-header inside">
    			<span onClick={closeModal} className="close">&times;</span>
    		</div>
    		<div className="modal-body justify-content-around inside">
				<div className="modal-title inside" >
					{title}
				</div>
				{options.map((i, index) => (
					<button 
						style={{cursor: "pointer"}} 
						onClick={ () => func(i, cardModalId, matchPath, parentInfo, playArea, title, user, userPlayerNumber)}
					>
						{i.title}
					</button>
				)) }
			</div>
    	</div>
    </div>
)

export default ChoiceModal;