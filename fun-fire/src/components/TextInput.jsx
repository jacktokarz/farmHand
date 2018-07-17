import React from 'react'
import PropTypes from 'prop-types'


const TextInput= ({text, onSubmit, onChange}) => (
	<div>
		<form onSubmit={ e => {
				e.preventDefault();
				onSubmit(text);
			} }
		>
			<input type="text" value={text} onChange={onChange} />
			<button type="submit">Click Me Please!</button>
		</form>
	</div>

)

TextInput.PropTypes = {
	text: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default TextInput;