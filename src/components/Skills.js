import React, { Component } from 'react';
import html from '../images/HTML5_Badge_512.png'
import javaScript from '../images/javascript.png'
import css from '../images/css.png'
import react from '../images/react2.png'
import redux from '../images/redux.png'
import git from '../images/git.png'
import github from '../images/github.png'
import agile from '../images/agile.png'
import nodejs from '../images/nodejs.png'
import mysql from '../images/mysql.png'
import ex from '../images/ex.png'

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h1>
          Skills
          <img src={html} alt='lala' height={100}></img>
          <img src={javaScript} alt='lala'height={100}></img>
          <img src={css} alt='lala'height={120}></img>
          <img src={react} alt='lala'height={100}></img>
          <img src={redux} alt='lala'height={100}></img>
          <img src={git} alt='lala'height={100}></img>
          <img src={github} alt='lala'height={100}></img>
          <img src={agile} alt='lala'height={100}></img>
          <img src={nodejs} alt='lala'height={100}></img>
          <img src={mysql} alt='lala'height={100}></img>
          <img src={ex} alt='lala'height={100}></img>
        </h1>
      </div>
    );
  }
}

export default Skills;