import React from 'react'
import './list.styles.scss'

const List = () => {
  return (
    <div className='list'>
      <div className='list__header'>
       <h2>this is your todo list</h2>
      </div>
      <div className='list__content'>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
        </ul>
      </div>
    </div>
  )

}

export default List