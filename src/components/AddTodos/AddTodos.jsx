/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import useTodos from '@hooks/useTodos';

export const AddTodos = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { createTodo } = useTodos();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      createTodo({
        title,
        content,
        completed: false,
      });
    }}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        required
      />
      <input
        type="text"
        placeholder="content"
        value={content}
        onChange={({ target }) => setContent(target.value)}
      />
      <input type="submit" />
    </form>
  )
};
