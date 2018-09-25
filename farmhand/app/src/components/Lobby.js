import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

import {ChoiceModal, } from '../containers'



const Lobby= ({createMatch, entryAction, history, matches, user}) => (
  <div className="App container-fluid">

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
            <tr key={i.id}>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button onClick={() => createMatch(user)}>Create Match</button>
  
      <ChoiceModal />
  </div>

)


export default Lobby;