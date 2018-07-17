import React from 'react'
import PropTypes from 'prop-types'


const Header= ({greeting, headerButtonText, headerButtonAction}) => (
	<nav className="navbar navbar-dark">
      <div className="navbar-text">{greeting}</div>
      <button className="btn" onClick={headerButtonAction}>{headerButtonText}</button>
    </nav>
)

TextInput.PropTypes = {
	greeting: PropTypes.string.isRequired,
	headerButtonText: PropTypes.string.isRequired,
	headerButtonAction: PropTypes.func.isRequired,
}

export default Header;