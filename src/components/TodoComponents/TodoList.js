import React from 'react'
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(item => (
        <Todo 
          key={item.id}
          todo={item}
          onClick={(e) => props.toggleItem(e, item.id)}  
          />
      ))}
      
    </div>
  )
}

export default TodoList
