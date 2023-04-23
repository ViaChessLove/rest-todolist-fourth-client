import { useContext } from 'react';

import TodoContext from '@contexts/TodoContext';
import {
  CREATE_TODO,
  GET_ALL_TODOS,
  REMOVE_TODO,
  UPDATE_TODO,
} from '@utils/constants';

const useTodos = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const getTodos = () => {
    fetch(GET_ALL_TODOS)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((e) => {
        console.warn(e);
        setTodos([]);
      });
  };

  const removeTodo = (id) => {
    fetch(REMOVE_TODO(id), {
      method: 'DELETE',
    })
      .then(() => {
        const updatedTodos = todos.filter(({ _id: todoId }) => todoId !== id);

        setTodos(updatedTodos);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  const createTodo = (data) => {
    fetch(CREATE_TODO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((todo) => {
        setTodos([
          ...todos,
          todo,
        ]);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  const updateCompleted = (id, data) => {
    fetch(UPDATE_TODO(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        const updatedTodos = todos.map((todo) => {
          if (todo._id === id) {
            return ({
              ...todo,
              completed: !todo.completed,
            });
          }

          return todo;
        });

        setTodos(updatedTodos);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  return {
    getTodos,
    createTodo,
    removeTodo,
    updateCompleted,
  };
};

export default useTodos;