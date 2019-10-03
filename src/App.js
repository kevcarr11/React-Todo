import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import "./components/TodoComponents/Todo.css"
import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor() {
    super()

    this.state = {

      todos: [
        {
          task: "Walk The Dog",
          id: 123,
          completed: false
        },
        {
          task: "Take Out Trash",
          id: 1234,
          completed: false
        },
        {
          task: "30 Minute Workout",
          id: 1247,
          completed: false
        },
        {
          task: "Fix Back Door",
          id: 1294,
          completed: false
        },
        {
          task: "Read a Book",
          id: 1296,
          completed: false
        },
        {
          task: "Learn Something New",
          id: 1236,
          completed: false
        }
      ]
    }
  }
  
  toggleItem = (event, itemId) => {
    event.preventDefault()
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else{
          return item
        }
      })
    })
  }

  addItem = (event, taskName) => {
    const newItem = {
      id: Date.now(),
      task: taskName,
      completed: false
    }

    this.setState({
      todos: [newItem, ...this.state.todos]
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed
      })
    })
  }
  

  render() {
    return (
      <main>
        <Card className="text-center">
          <Card.Header>My Todo List!</Card.Header>
            <Card.Body>
              <h1>Add a task</h1>
                <Card.Title className="cardTitle"><TodoForm 
                  addItem={this.addItem}
                  /></Card.Title>
                <TodoList 
                  todos={this.state.todos}
                  toggleItem={this.toggleItem} 
                  />
                
                <Button className="clrBtn" onClick={this.clearCompleted} >Clear Completed</Button>
            </Card.Body>
          <Card.Footer className="text-muted">react app</Card.Footer>
        </Card>
      </main>
      
    );
  }
}

export default App;
