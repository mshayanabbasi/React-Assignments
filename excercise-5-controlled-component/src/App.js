import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
      state = {
        text: ""
      }
      whenChange = (event) =>  {
        this.setState({text: event.target.value})
      }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Write your text here"
          value={this.state.text}
          onChange={this.whenChange} />
          <p className="echo">You are saying: {this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default App;
