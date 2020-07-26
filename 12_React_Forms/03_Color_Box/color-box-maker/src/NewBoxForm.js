import React, { Component } from "react";
import uuid from "uuid/v4";

export class NewBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      width: "",
      color: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    //Call the passed in prop function
    this.props.createBox(newBox);
    this.setState({ height: "", width: "", color: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            type="text"
            id="height"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            id="width"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Color: </label>
          <input
            id="color"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>
        <button>Add Item!</button>
      </form>
    );
  }
}

export default NewBoxForm;