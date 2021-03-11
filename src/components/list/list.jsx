import React from 'react'
import './list.styles.scss'

const List = ({ todos, handleComplete}) => {
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