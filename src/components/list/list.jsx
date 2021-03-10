import React, { useState } from 'react'
import './list.styles.scss'

const List = () => {
  const [todos, setTodos] = useState([ {text: 'Set up internet', finished: false, id:0}, {text: 'build desk', finished: false, id:1}, {text: 'go to ikea', finished: false, id:2}])
  const [changes, setChanges] = useState(0)

  const handleComplete = (id) => {
    const updatedTodos = todos.map(item => (item.id === id ? {...item, finished:!item.finished } : item))
    setTodos(updatedTodos)
    setChanges(changes+1)
  }
  console.log(todos)
  const todosJsx = todos.map((todo, index) => {
    return(
      <div key={index}>
        <li className={todo.finished ? 'list__item-checked' : 'list__item'} onClick={() => handleComplete(todo.id)}>{todo.text}</li>
      </div>
    )
  })
  return (
    <div className='list'>
      <div className='list__header'>
       <h2>this is your todo list</h2>
      </div>
      <div className='list__content'>
        <ul className='list__unordered-list'>
          {todosJsx}
        </ul>
      </div>
    </div>
  )

}

export default List