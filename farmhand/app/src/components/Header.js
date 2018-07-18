import React from 'react'
import PropTypes from 'prop-types'


const Header= ({buttonText, onClick}) => (
	<nav className="navbar">
      <div className="navbar-brand navbar-dark" href="#">Navbar 1</div>
      <button className="btn" onClick={() => {
	      	onClick({buttonText});
	      } }
      >
      	{buttonText}
      </button>
    </nav>
)

Header.PropTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default Header;