import { GET_USERS, SET_USER, GET_POSTS, SET_POST } from './types';
export const getusers = () => async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (err) {
    console.log('Error :', err);
  }
};
export const setSelectedUser = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_USER,
      payload: data,
    });
  } catch (err) {
    console.log('Error :', err);
  }
};
export const getposts = () => async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch({
      type: GET_POSTS,
      payload: data,
    });
  } catch (err) {
    console.log('Error :', err);
  }
};
export const setSelectedPost = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_POST,
      payload: data,
    });
  } catch (err) {
    console.log('Error :', err);
  }
};
