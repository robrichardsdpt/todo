import React, {useState} from 'react'
import List from './components/list/list'
import Create from './components/create/create'

import './App.scss'

const App = () => {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([ {text: 'Set up internet', finished: false, id:0}, {text: 'build desk', finished: false, id:1}, {text: 'go to ikea', finished: false, id:2}])
  
  const handleComplete = (id) => {
    const updatedTodos = todos.map(item => (item.id === id ? {...item, finished:!item.finished } : item))
    setTodos(updatedTodos)
  }
  
  const handleChange = (event) => {
    event.preventDefault()
    setNewTodo(event.target.value)
  }

  const handleSubmit= (event) => {
    event.preventDefault()
    const newTodoObj = {text: newTodo, finished: false, id:todos.length}
    const newTodoArray = [...todos, newTodoObj]
    setTodos(newTodoArray)
    console.log(todos)
    setNewTodo('')
  }

  return (
    <div className="app">
      <div className='heading'>
        <h1>
          Todo List
        </h1>
      </div>
      <div className="main">
        <List newTodo={newTodo} todos={todos} handleComplete={handleComplete} />
        <Create handleChange={handleChange} handleSubmit={handleSubmit} newTodo={newTodo}/>
      </div>
    </div>
  )
}

export default App
