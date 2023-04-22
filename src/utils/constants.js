const API_PREFIX = 'http://localhost:5000/api';
const GET_ALL_TODOS = `${API_PREFIX}/TodoItems`;
const CREATE_TODO = `${GET_ALL_TODOS}`;
const UPDATE_TODO = (id) => `${API_PREFIX}/TodoItems/${id}`;
const REMOVE_TODO = (id) => `${API_PREFIX}/TodoItems/${id}`;

export {
  GET_ALL_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
};
