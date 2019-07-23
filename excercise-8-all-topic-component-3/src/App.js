import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const users = [{ username: 'your_name' }, { username: 'Aamir_Pinger' }];
//
// const messages = [
//   { username: 'your_name', text: 'Hi, Aamir!' },
//   { username: 'your_name', text: 'How are you?' },
//   { username: 'Aamir_Pinger', text: 'Hello, {your_name}! Good n you?' },
// ];


class App extends Component {
  state = {
    user1Name: "Shayan",
    user2Name: "Shayan",
    user1Message: "",
    user2Message: "",
    messages: []
  }
  whenEmpty1 = () => {
       return this.state.user1Message === '';
   }
   whenEmpty2 = () => {
       return this.state.user2Message === '';
   }
   whenChange = (event) => {
       const { name, value } = event.target;
       this.setState({ [name]: value })
   }
   whenSubmit1 = (event) => {
       event.preventDefault();
       let temObj = {username: this.state.user1Name , message: this.state.user1Message}
       let temArr = [...this.state.messages, temObj]
       this.setState({user1Message: "", messages: temArr})
   }
   whenSubmit2 = (event) => {
       event.preventDefault();
       let temObj = {username: this.state.user2Name , message: this.state.user2Message}
       let temArr = [...this.state.messages, temObj]
       this.setState({user2Message: "", messages: temArr})
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>
        </header>
        <div className="shell">
          <div className="chat-window">
            <h2>GhupShap Chat App</h2>
            <div className="name sender"><i>{this.state.user1Name}</i></div>
              {this.state.messages.length > 0 ? (
            <ul className="message-list">
              {this.state.messages.map((v, i) =>
                <li key={i}>{`${v.username}: ${v.message}`}</li>
              )}
            </ul>):("No Messages")
          }
            <div>
              <form className="input-group" onSubmit={this.whenSubmit1}>
                <input type="text" className="form-control" name="user1Message" placeholder="Enter your message..." value={this.state.user1Message} onChange={this.whenChange} />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.whenEmpty1()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="chat-window">
            <h2>GhupShap Chat App</h2>
            <div className="name sender"><i>{this.state.user2Name}</i></div>
            {this.state.messages.length > 0 ? (
            <ul className="message-list">
              {this.state.messages.map((v, i) => (
                <li key={i}>{`${v.username}: ${v.message}`}</li>
              ))}
            </ul>):("No Messages")}

            <div>
              <form className="input-group" onSubmit={this.whenSubmit2}>
                <input type="text" className="form-control" name="user2Message" placeholder="Write your message..." value={this.state.user2Message} onChange={this.whenChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.whenEmpty2()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
