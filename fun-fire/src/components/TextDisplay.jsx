import React from 'react'
import PropTypes from 'prop-types'


const TextDisplay= ({text, dbText}) => (
	<div>
		<p>What ur typin' - {text}</p>
		<p>What ya done saved - {dbText}</p>
	</div>

)

TextDisplay.PropTypes = {
	text: PropTypes.string.isRequired,
	dbText: PropTypes.string.isRequired,
}

export default TextDisplay;