/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useState,
  useMemo,
} from 'react';

import TodoContext from '@contexts/TodoContext';

const withTodoContext = (Component) => function ({ ...props }) {
  const [todos, setTodos] = useState(null);

  const initialState = useMemo(() => ({
    todos,
    setTodos,
  }), [todos, setTodos]);

  return (
    <TodoContext.Provider
      value={initialState}
    >
      <Component {...props} />
    </TodoContext.Provider>
  );
};

export default withTodoContext;
