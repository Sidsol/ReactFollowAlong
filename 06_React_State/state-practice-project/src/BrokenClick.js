import React, { Component } from "react";

export default class BrokenClick extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
    this.state = { num: 0 };
    //bind value to this in constructors
    this.handleClick = this.handleClick.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }
  // function to handle event can call multiple funcitons
  handleClick(e) {
    this.getRandom();
  }
// direct handling of event
  getRandom() {
    let rand = Math.floor(Math.random() * this.props.maxNum) + 1;
    this.setState({ num: rand });
  }

  render() {
    let buttonToCLick;
    if (this.state.num === 7) {
      buttonToCLick = <h2>You Win!</h2>;
    } else {
      buttonToCLick = <button onClick={this.getRandom}>Click Me!</button>;
    }
    return (
      <div>
        <h1>{this.state.num}</h1>
        {/* inline rendering with conditional and using a clickHandler function to call other functions */}
        {/* {this.state.num === 7 && <h2>You Win!</h2>} */}
        {/* {this.state.num === 7
          ? <h2>You Win!</h2>
          : <button onClick={this.handleClick}>Click Me!</button>
        } */}
        {buttonToCLick}
      </div>
    );
  }
}
