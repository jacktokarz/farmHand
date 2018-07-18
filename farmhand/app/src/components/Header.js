import React from 'react'
import PropTypes from 'prop-types'
import {getLoginModalVis} from '../selectors'


const Header= ({buttonText, password, username, onClick, loginModalVis, errorMessage, closeLoginModal, onLoginSubmit, updateUsername, updatePassword, checkLogin, openRegisterFromLogin}) => (
	<div>
    <nav className="navbar">
        <div className="navbar-brand navbar-dark" href="#">{loginModalVis}</div>
        <button className="btn" onClick={() => {
  	      	onClick({buttonText});
  	      } }
        >
        	{buttonText}
        </button>
    </nav>
    <div style={{display: loginModalVis}} id="loginModal" className="modal">
      <div className="modal-content">
          <div className="modal-header">
          <span className="close" onClick={closeLoginModal}>&times;</span>
          <h2>Login</h2>
          </div>
          <div className="modal-body">
          <div id="loginError" className="error">{errorMessage}</div>
          <p>Please Log In With Your Username And Password Below</p>
          <form autoComplete="off" name="loginForm" onSubmit={ e => {
            e.preventDefault();
            onLoginSubmit(this.username);
            } }
          >
            <input id="loginUsername" className="inputBox" type="text" value={username} onChange={updateUsername} placeholder="Username" />
            <input id="loginPassword" className="inputBox" type="password" value={password} onChange={updatePassword} placeholder= "Password"/>
            <br />
            <input onClick={() => checkLogin({username}, {password})} type="button" value="Login" id="loginButton" />
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={openRegisterFromLogin}>Or Register Here</button>
          </div>
        </div>
    </div>
  </div>
)

Header.defaultProps= {
  buttonText: "Log Out",
}

Header.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default Header;