import React, { Component } from 'react'
import  Button  from 'react-bootstrap/Button';

export default class TodoForm extends Component {
  constructor(){
    super()
    this.state = {
      value: ""
    }
  }

handleChange = (e) => {
  this.setState({
    value: e.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()
  this.props.addItem(event, this.state.value)
  this.setState({
    value: ""
  })
  // localStorage.setItem("task", JSON.stringify(this.state.value))
}


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
           />
           <Button type="submit" className="todoBtn">Add Todo</Button>
        </form>
      </div>
    )
  }
}
