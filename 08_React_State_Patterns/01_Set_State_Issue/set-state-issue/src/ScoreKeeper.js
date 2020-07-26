import React, { Component } from 'react';

export class ScoreKeeper extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       score: 0
    };
    this.singleKill = this.singleKill.bind(this);
    this.multiKill = this.multiKill.bind(this);
  }
  // Incorrect way to set set state using an existing state use callback
  singleKill(){
    this.setState({score: this.state.score + 1});
  }
  // Incorrect way to set set state mutliple timeas
  // multiKill(){
  //   this.setState({score: this.state.score + 1});
  //   this.setState({score: this.state.score + 1});
  //   this.setState({score: this.state.score + 1});
  // }

  //Use callback to pass in current state and change state
  // multiKill(){
  //   this.setState(curState => {return {score: curState.score + 1}});
  //   this.setState(curState => {return {score: curState.score + 1}});
  //   this.setState(curState => {return {score: curState.score + 1}});
  // }

  incrementScore(curState){
    return { score: curState.score + 1}
  }
  multiKill(){
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.multiKill}>Triple Kill!!!</button>
      </div>
    )
  }
}

export default ScoreKeeper
