import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

import {} from '../utils'


const ChoiceModal= ({cardModalId, closeModal, communityField, func, history, marketArray, matchPath, options, parentInfo, playArea, required, title, trashArray, user, userPlayerNumber, vis}) => (

	<div style={{display: vis}} className="modal" onClick={ (event) => required?"":(!event.target.classList.contains("inside") ? closeModal() : "" ) }>
		<div className="visible-modal-content inside" id="modalContent">
    		<div className="modal-header inside">
    			<span style={{display: required?"none":"initial"}} onClick={closeModal} className="close">&times;</span>
    		</div>
    		<div className="modal-body justify-content-around inside">
				<div className="modal-title inside">
					{title}
				</div>
				{options.map((i, index) => (
					<button 
						className= "inside"
						style={{cursor: "pointer", margin: "3%", backgroundColor: title.startsWith("Pick")?i.id:"buttonface"}} 
						onClick={ () => func(i, cardModalId, communityField, marketArray, matchPath, parentInfo, playArea, title, trashArray, user, userPlayerNumber, history)}
					>
						{i.title}
					</button>
				)) }
			</div>
    	</div>
    </div>
)

export default withRouter(ChoiceModal);