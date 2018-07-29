import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // state= {
  //
  // }

  onFetch() {
    console.log('fetch calling');
    fetch("data/data.json")
    .then(response => response.json())
    .then(data => {
      console.log('got data:', data);
      // this.setState({
      //
      // });
    }
  }

  onFetch();

  render() {
    return (
      <div class="Graph">
        <div class="Graph-header">
  		     <h1>San Francisco Weather Over the Last 10 Years</h1>
        </div>

        <div class="Graph-container">
          <p>All records taken on July 15th</p>
  				<button onCLick="highTemp()">Highest temp</button>
  				<button onCLick="lowTemp()">Lowest temp</button>
          <div class="Graph-bars">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
