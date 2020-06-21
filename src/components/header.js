import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import PhotoPrevew from '../components/photo-prev';
//
// import Transform from '../components/transform-func';
import Autf from '../components/autf';

import '../css/header.css';

class Header extends Component {

  logOutButton() {
    console.log("EXIT");
    window.location.assign("https://unsplash.com/oauth/login");
  }

  render() {

    return (
          <header className='header'>
            <img src="./src/img/binoculars.png" />
            <button onClick={() => this.logOutButton()}>LOG OUT</button>
          </header>
    )
  }
}

export default Header;
