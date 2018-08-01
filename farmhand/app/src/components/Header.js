import React from 'react'
import PropTypes from 'prop-types'


const Header= (
  {
    buttonText, 
    checkLogin, 
    checkRegister, 
    closeLoginModal, 
    closeRegisterModal, 
    confirmPassword, 
    errorMessage, 
    logButtonAction, 
    loginModalVis, 
    openRegisterFromLogin, 
    password, 
    registerErrorMessage, 
    registerModalVis, 
    updateConfirmPassword, 
    updatePassword, 
    updateUsername, 
    user, 
    username,
  }
) => (
	<div>
    <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand" href="#">
          {user === null ? "Welcome to Otter Owl Games" : "Welcome back to Otter Owl Games, "+user}
        </div>
        <button className="btn" onClick={() => {
  	      	logButtonAction({buttonText});
  	      } }
        >
        	{buttonText}
        </button>
    </nav>


    <div style={{display: loginModalVis}} id="loginModal" className="modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Login</h3>
            <span className="close" onClick={closeLoginModal}>&times;</span>
          </div>
          <div className="modal-body">
          <div id="loginError" className="error" style={{display: errorMessage.length > 0 ? "block" : "none"}}>
            {errorMessage}
          </div>
          <p>Please Log In With Your Username And Password Below</p>
          <form autoComplete="off" name="loginForm">
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

    <div style={{display: registerModalVis}} id="registerModal" className="modal container">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
          <h3 className="modal-title align-self-center">Register</h3>
            <span className="close" onClick={closeRegisterModal}>&times;</span>
          </div>
          <div className="modal-body">
            <div id="registerError" className="error row row justify-content-around" style={{display: registerErrorMessage.length > 0 ? "block" : "none"}}>
              {registerErrorMessage}
            </div>
            <p>Please Enter Your Desired Username And Password Below</p>
            <div className="row justify-content-around">
              <form autoComplete="off" name="registerForm">
                <input id="registerUsername" className="inputBox" type="text" value={username} onChange={updateUsername} placeholder="Username" />
                <input id="registerPassword" className="inputBox" type="password" value={password} onChange={updatePassword} placeholder= "Password"/>
                <input id="registerConfirmPassword" className="inputBox" type="password" value={confirmPassword} onChange={updateConfirmPassword} placeholder= "Confirm Password"/>
                <br />
                <input onClick={() => checkRegister({username}, {password}, {confirmPassword})} type="button" value="Register" id="registerButton" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)


Header.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default Header;