import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <nav className="header navbar navbar-dark bg-dark">
    <div className="container">
        <div className="h1 col-md-4 offset-md-4 text-light" href="/">{props.title}</div>
        <button className="col-md-2 offset-md-2 align-self-end" onClick={returnHome}>Back To OOF Home</button>
      </div>
  </nav>
);

Header.defaultProps = {
  title: 'Title'
};

Header.propTypes = {
  title: PropTypes.string
};

function returnHome() {
  window.location ="../";
}


export default Header;