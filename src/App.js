import React, { Component } from 'react';
import './App.css';
import dataJson from './data/data.json';

class App extends Component {
  // state= {
  //
  // }

  componentDidMount = () => {
    this.onFetch();
  }

  onFetch = () => {
    console.log('fetch calling');
    console.log(dataJson);
    // .catch(error => {
    //   console.log('====================');
    //   console.error(error);
    // });
  }


  highTemp = () => {
    console.log("High temp function working");
  //   let elem = document.getElementsByClassName("Bar");
  //   elem[9].style.backgroundColor = "red";
  //   elem[9].style.color = "black";
  //   elem[9].style.height = "85%";
  //   elem[9].style.transition = "3s";
  }

  lowTemp = () => {
    console.log("Low temp function working");
  //   let elem = document.getElementsByClassName("Bar");
  //   elem[5].style.backgroundColor = "blue";
  //   elem[5].style.color = "black";
  //   elem[5].style.height = "53%";
  //   elem[5].style.transition = "3s";
  }

  render() {

    return (
      <div className="Graph">
        <div className="Graph-header">
  		     <h1>San Francisco Weather Over the Last 10 Years</h1>
        </div>

        <div className="Graph-container">
          <p>All records taken on July 15th</p>
  				<button onClick={this.highTemp}>Highest temp</button>
  				<button onClick={this.lowTemp}>Lowest temp</button>
          <div className="Graph-bars">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
