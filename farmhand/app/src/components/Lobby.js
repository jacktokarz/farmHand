import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

import {ChoiceModal} from '../containers'



const Lobby= ({canMakeMatch, createMatch, deleteMatch, entryAction, goHome, history, matches, user}) => (
  <div className="App container-fluid">

    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand text-center" href="#">
          Welcome to the Farm Hand Game Lobby, {user}
        </div>
        <button className="btn" 
          onClick={ () => goHome(history) }
        >
          Home
        </button>
      </nav>
    </div>

    <div>
      <table className="table table-striped" id="matchesTable">
        <thead>
          <tr>
            <th>Players</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="matchesTableBody">
          {matches.map((i, index) => (
            <tr key={i.key}>
              <td>
                {i.playerList}
              </td>
              <td>
                <button 
                  className={i.actionLabel=="" ? "hidden": "btn"} 
                  onClick={() => entryAction(i, history, user)}
                >
                  {i.actionLabel}
                </button>
                <button
                  className={i.matchLeader!==user?"hidden":"btn"}
                  onClick={() => deleteMatch(i.key)}
                >
                  Delete Match
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button
      onClick={() => canMakeMatch?createMatch(user):null}
    >
      {canMakeMatch?"Create Match":"You can only create 2 active matches"}
    </button>
  
      <ChoiceModal />
  </div>

)


export default Lobby;