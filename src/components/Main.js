import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import '../App.css';


class Main extends Component {
  render() {
    return (
      <main>
        <div className="welcome">
          <Fade left>
            <div className='myName'>
              <h1>Olá, sou</h1>
              <h1 id='name'>Gustavo Oliveira.</h1>
            </div>
            <h2>Desenvolvedor Full Stack.</h2>
            <p>
              <span class="btn btn-outline-secondary">Skills</span>
              <span class="btn btn-outline-secondary">Projetos</span>
              <span class="btn btn-outline-secondary">Sobre</span>
              <span class="btn btn-outline-secondary">Contato</span>
            </p>
          </Fade>
        </div>
      </main>
    );
  }
}

export default Main;