import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './containers/TodoApp';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  ReactDOM
    .createRoot(app)
    .render(
      <TodoApp />,
    );
});
