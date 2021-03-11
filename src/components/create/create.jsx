import React from 'react'

const Create = ({ handleChange, handleSubmit, newTodo }) => {
  return (
    <div className='create__container'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='text' onChange={handleChange} value={newTodo}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create