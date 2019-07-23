import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    value: "",
    userName: "",
    conditionalContent: true
  }
  whenChange = (event) => {
    this.setState({value: event.target.value})
  }
  whenSubmit = (event) => {
    event.preventDefault()
    this.setState({userName: this.state.value})
  }
  whenEmpty = () => {
    return this.state.value === '';
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>
        </header>

			<form onSubmit={this.whenSubmit}>
        <input
            type="text"
            placeholder="Enter your Name"
            value={this.state.value}
            onChange={this.whenChange}
        />
        <button disabled={this.whenEmpty()}>Submit</button>
      </form>
        {this.state.value.length > 0 ? (<div>
          <p>{this.state.userName} has played {this.state.conditionalContent ? ("0") : ("*")} games</p>
          <button onClick={() => {
            this.setState({
              conditionalContent: !this.state.conditionalContent
            })
          }}>{this.state.conditionalContent ? ("Hide no of games played by user") : ("Show no of games user played")}
          </button>
          </div>): (null)}

      </div>
    );
  }
}

export default App;
