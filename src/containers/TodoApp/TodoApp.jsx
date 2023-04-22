import React, { useContext, useEffect } from 'react';

import TodoContext from '@contexts/TodoContext';
import useTodos from '@hooks/useTodos';
import TodoItem from '@components/TodoItem';
import AddTodos from '@components/AddTodos';
import { Wrapper } from './styles';

// eslint-disable-next-line import/prefer-default-export
export function TodoApp() {
  const { todos } = useContext(TodoContext);

  const { getTodos } = useTodos();

  useEffect(() => {
    getTodos();
  }, []);

  if (!Array.isArray(todos) && !todos) {
    return (
      <div>
        Loading...
      </div>
    );
  }


  return (
    <Wrapper>
      <AddTodos />
      {Array.isArray(todos)
        && todos.length === 0
        && (
          <div>
            No todos
          </div>
        )}
      {todos.map(({
        _id: id,
        title,
        content,
        completed,
        date,
      }) => (
        <TodoItem
          key={id}
          date={date}
          id={id}
          title={title}
          content={content}
          completed={completed}
        />
      ))}
    </Wrapper>
  );
}
