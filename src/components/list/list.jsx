import React from 'react'
import './list.styles.scss'

const List = () => {
  const todos = ['Set up internet', 'build desk', 'go to ikea']

  const todosJsx = todos.map((todo, index) => {
    return(
      <div key={index}>
        <li className='list__item'>{todo}</li>
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