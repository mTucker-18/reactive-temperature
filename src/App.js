import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {

  }

  onFetch() {
    console.log('fetch calling');
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchBox},California&appid=0de82b6b4ba5d843dac44bbee4d02543`)
    .then(response => response.json())
    .then(data => {
      console.log('got data:', data);
      this.setState({

      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
