import './App.css';
import Table from "./Components/Table";
import React, { Component } from 'react';

class App extends Component {

  state = {
    dotColors: [
        "", "", "", "", "", "", "", "", "", 
        "", "", "", "", "", "", "", "", "", 
        "", "", "", "", "", "", "", "", "", 
        "", "", "", "", "", "", "", "", "", 
        "", "", "", "", "", "", "", "", ""
    ],
  }

  showDot = (index) => {
    let toggleDot = this.state.dotColors

    if (toggleDot[index] === "") {toggleDot[index] = "lightgreen"} 
    else if (toggleDot[index] === "lightgreen") {toggleDot[index] = "royalblue"}
    else if (toggleDot[index] === "royalblue") {toggleDot[index] = "red"}
    else if (toggleDot[index] === "red") {toggleDot[index] = ""}

    this.setState({
        dotColors: toggleDot
    })
  }


  render (){   
  return (
    <div className="App">
      <h1>Elastic Habits Tracker</h1>
      <hr></hr>
      <Table dotColors={this.state.dotColors} showDot={this.showDot}></Table>
    </div>
  ); 
  }
}

export default App;
