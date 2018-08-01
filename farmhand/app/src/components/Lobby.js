import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'



const Lobby= ({createMatch, entryAction, history, matches}) => (
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
                  onClick={() => entryAction(i, history)}
                >
                  {i.actionLabel}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button onClick={createMatch}>Create Match</button>
  </div>
)

Lobby.propTypes = {

}

export default Lobby;