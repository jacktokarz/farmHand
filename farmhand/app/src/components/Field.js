import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'


const Field= ({data}) => (
    <img 
      className="card" 
      style={{"maxWidth": (90)+"%" }}  
      src={data.picture}
    />

)


export default Field;