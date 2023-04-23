/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import useTodos from '@hooks/useTodos';

import { Wrapper } from './style';

export const TodoItem = ({
  id,
  title,
  content,
  completed,
  date,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { updateCompleted, removeTodo } = useTodos();

  return (
    <>
      <Wrapper
        onMouseOver={() => setIsCollapsed(!isCollapsed)}
        onMouseOut={() => setIsCollapsed(!isCollapsed)}
      >
        <span>
          {title}
        </span>
        <input
          type="checkbox"
          checked={completed}
          onChange={({ target }) => {
            updateCompleted(id, {
              _id: id,
              completed: target.checked,
              title,
              content,
              date,
            });
          }}
        />
        <input
          type="submit"
          value="Удалить"
          onClick={() => removeTodo(id)}
        />
      </Wrapper>
      {!isCollapsed && content && (
        <div>
          {content}
        </div>
      )}
    </>
  );
};
