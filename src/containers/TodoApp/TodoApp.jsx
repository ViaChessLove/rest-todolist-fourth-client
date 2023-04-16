import React, { useEffect, useState } from 'react';
import { GET_ALL_TODOS } from '../../utils/constants';

export const TodoApp = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch(GET_ALL_TODOS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then((data) => setTodos(data))
  }, []);


  return (
    <div>
      {!todos && (
        <>
          Loading...
        </>
      )}
      {todos && todos.length && todos.map((todo) => (
        <div key={todo._id}>
          {todo.title}
          <input type="checkbox" checked={todo.completed}/>
        </div>
      ))}
    </div>
  )
};