import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'


const Settings= ({ checkUpdatePassword, errorMessage, emailAddress, newPasswordInput, oldPasswordInput, updateNewPasswordInput, updateOldPasswordInput }) => (
	<div className="App container-fluid">
		<div className="col-lg-4 offset-lg-1">
			<div className="form-group">
				<label>Email: </label>
	            <input className="input" readonly value={emailAddress} placeholder="Email Address" />
	            <label>Confirm Existing Password: </label>
				<input className="input" type="password" value={oldPasswordInput} onChange={updateOldPasswordInput} placeholder= "Existing Password" />
            	<label>New Password: </label>
				<input className="input" type="password" value={newPasswordInput} onChange={updateNewPasswordInput} placeholder= "" />
            	<br />
            	<button type="submit" className="btn-primary btn" onClick={() => checkUpdatePassword({emailAddress}, {oldPasswordInput}, {newPasswordInput})}>Submit</button>
			</div>
			<div className="error" style={{ "display": (errorMessage.length>1?"block":"none") }}>
				{errorMessage}
			</div>
		</div>
	</div>
)

export default Settings;