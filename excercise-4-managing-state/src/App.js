import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    totalnumCorrect: 0,
    totalnumQuestion: 0
  }
  whenClick = () => {
    this.setState({
      totalnumCorrect: this.state.totalnumCorrect + 1
    })
  }
  render() {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const number3 = Math.floor(Math.random() * 100);
    const correctAnswer = number1 * number2 * number3
    const proposedAnswer = Math.floor(Math.random() * 3) * number1 * number2 * number3;
    const numQuestions = this.state.totalnumQuestion;
    const numCorrect = this.state.totalnumCorrect;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Practice</h1>
	</header>
        <div className="game">
          <h2>ADD THE NUMBERS GAME</h2>
          <div className="equation">
            <p className="text">{`${number1} * ${number2} * ${number3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => {
            if(correctAnswer === proposedAnswer) {
              this.setState({
                totalnumCorrect: numCorrect + 1, totalnumQuestion: numQuestions + 1
              })
            }
            else {
              this.setState({
                totalnumQuestion: numQuestions + 1
              })
            }
          }}>True</button>
          <button onClick={() => {
            if (correctAnswer !== proposedAnswer) {
                this.setState({
                  totalnumCorrect: numCorrect + 1, totalnumQuestion: numQuestions + 1
                })
            }
            else {
              this.setState({
                totalnumQuestion: numQuestions + 1
              })
            }
          }}>False</button>
          <p className="text">
            You have answered {numCorrect} question answered correctly out of total {numQuestions} questions.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
