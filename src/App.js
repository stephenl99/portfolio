
import './App.css';
import logo from './text-1731099881792.png';
import linkedin from './icons8-linkedin-48.png'
import { useState, useEffect } from 'react';


function App() {
  return (
      <div className="App">

          <header className="App-header">
              <nav className={"navbar"}>
                  <div>
                      <img className={"logo"} src={logo} alt="logo"/>
                  </div>
                  <ul className="navbarList">
                      <li className="navbarElement" href="#home">Home</li>
                      <li className="navbarElement" href="#news">About</li>
                      <li className="navbarElement" href="#contact">Projects</li>
                      <li className="navbarElement" href="#about">Resumé</li>
                      <li className="navbarElement" href="#about">Contact</li>
                  </ul>
                  <div className={"linkContainer"}>
                      <img src={linkedin} alt="linkedin"/>
                  </div>
              </nav>
          </header>
          <p>
              Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
      </div>
  );
}

export default App;
