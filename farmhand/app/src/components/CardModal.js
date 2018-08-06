import React from 'react'
import PropTypes from 'prop-types'

import {} from '../utils'


const CardModal= ({actions, closeModal, data, func, vis}) => (

	<div style={{display: vis}} className="modal">
		<div className="modal-content">
    		<div className="modal-header">
    			<span onClick={closeModal} className="close">&times;</span>
    		</div>
    		<div className="modal-body justify-content-around">
				<img className="modal-img" src={data.picture} alt={data.title} />
				{actions.map((i, index) => (
					<button onClick={ () => func(i)} >{i}</button>
				)) }
			</div>
    	</div>
    </div>
)

CardModal.propTypes = {

}

export default CardModal;