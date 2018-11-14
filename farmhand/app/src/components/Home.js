import React from 'react'
import PropTypes from 'prop-types'

import {Header} from '../containers'
import {getCookie} from '../utils'


const Home= ({openLoginFromPlay, playRedirect, openRules, history}) => (
  <div className="App container-fluid">

    <Header />
  
    <div className="row justify-content-around">
      <div className="col-4 text-center" id="FHBox">
        <div id="FHText">
          <div id="FHTitle">Farm Hand</div>
          <button 
            onClick={ () => getCookie('user') === null ? openLoginFromPlay() : playRedirect(history)}
            className="btn"
          >
            Play
          </button>
          <button onClick={openRules} className="btn">Rules</button>
        </div>
      </div>

      <div className="col-4 text-center" id="FHBox">
        <div id="DCText">
          <div id="DCTitle">disCHORD - <br /><span style={{"fontSize": "40px"}}>coming soon</span></div>

        </div>
      </div>
    </div>

  </div>
)

Home.propTypes = {

}

export default Home;