import React from 'react';
import TodoList from './components/TodoComponents/TodoList'


class App extends React.Component {
  constructor() {
    super()

    this.state = {

      todos: [
        {
          task: "Walk The Dog",
          id: Date.now(),
          completed: false
        },
        {
          task: "Take Out Trash",
          id: Date.now(),
          completed: false
        },
        {
          task: "30 Minute Workout",
          id: Date.now(),
          completed: false
        },
        {
          task: "Fix Back Door",
          id: Date.now(),
          completed: false
        },
        {
          task: "Read a Book",
          id: Date.now(),
          completed: false
        },
        {
          task: "Learn Something New",
          id: Date.now(),
          completed: false
        }
      ]
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
