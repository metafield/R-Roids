import React, { Component } from 'react';
import Game from './Containers/Game'
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">R-Roids</h1>
        </header>
        <Game />
      </div>;
  }
}

export default App;
