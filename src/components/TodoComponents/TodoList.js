import React from 'react'
import Todo from './Todo';
import ListGroup from 'react-bootstrap/ListGroup'

const TodoList = props => {


  return (
    <ListGroup>
      <ListGroup.Item>{props.todos.map(item => (
        <Todo 
          key={item.id}
          todo={item}
          onClick={(e) => props.toggleItem(e, item.id)}  
          />
      ))}
      </ListGroup.Item>
    </ListGroup>
  )
}

export default TodoList
