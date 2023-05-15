import React, { Component } from 'react';
import { UilLinkedin, UilGithub, UilFile } from '@iconscout/react-unicons'
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header>
      <div class="navMenu">
        <a
          href="https://www.linkedin.com/in/gustavo-oliveira7/"
          target="_blank"
          className="navItem" rel="noreferrer"
        >
          <UilLinkedin size='50' color="#000000"/>
        </a>
        <a
          href="https://github.com/Gustavo-Oliveira7"
          target="_blank"
          className="navItem" rel="noreferrer">
          <UilGithub size='50' color="#000000"/>
        </a>
        <a
          href="https://drive.google.com/file/d/1oJhDhzIggiQd_jQ5atQg_an6GUB0sEJY/view?usp=sharing"
          target="_blank"
          className="navItem" rel="noreferrer">
          <UilFile size='50' color="#000000"/>
        </a>
      </div>
    </header>
    );
  }
}

export default Header;