import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">navbar</div>
        <div className="content">
          <div className="painel sidebar"> Sidebar </div>
          <div className="painel ingredientes"> Ingreditens </div>
          <div className="painel passoapasso"> Passo a Passo </div>
        </div>
      </div>
    );
  }
}

export default App;
