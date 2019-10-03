import React, { Component } from 'react'

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
           <button>Add Todo</button>
        </form>
      </div>
    )
  }
}
