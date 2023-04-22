const API_PREFIX = 'http://localhost:5000/api';
const GET_ALL_TODOS = `${API_PREFIX}/TodoItems`;
const updateTodo = (id) => `${API_PREFIX}/TodoItems/${id}`;

export {
  GET_ALL_TODOS,
  updateTodo,
};
