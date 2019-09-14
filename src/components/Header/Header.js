import React, { Component } from 'react'
import './Header.css'

import logo from '../../assets/facebook-logo.png'
import avatar from '../../assets/profile.jpg'

class Header extends Component {

  state = {
    username: "alvarokenzo.kenzo",
    avatar
  }

  render() {
    return (
      <header>
        <img src={logo} alt="logo" width="100px" />
        <div className="profile">
          <a href={`https://www.facebook.com/${this.state.username}`}>Minha conta</a>
          <img src={this.state.avatar} alt="profile image" />
        </div>
      </header>
    )
  }
}

export default Header