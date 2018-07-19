import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

import {Header} from './'
import {getCookie} from '../utils'


const Lobby= ({history, createMatch}) => (
  <div className="App container-fluid">

    <div>
      <table className="table table-striped" id="matchesTable">
        <thead>
          <tr>
            <th>Players</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id="matchesTableBody">
        </tbody>
      </table>
    </div>
    <button onclick={createMatch}>Create Match</button>
  </div>
)

Lobby.propTypes = {

}

export default Lobby;