import React, { Component } from "react";
import uuid from "uuid/v4";
import "./NewTodoForm.css";

export class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ""
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
    const newTask = { ...this.state, id: uuid(), completed: false };
    //Call the passed in prop function
    this.props.createTodo(newTask);
    this.setState({ task: "" });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo: </label>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="New Todo"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Item!</button>
      </form>
    );
  }
}

export default NewTodoForm;
