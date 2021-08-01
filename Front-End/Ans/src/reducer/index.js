import { GET_USERS, SET_USER, GET_POSTS, SET_POST } from '../actions/types';

const initialState = {
  users: [],
  posts: [],
  selected_user: {},
  selected_post: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        selected_user: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_POST:
      return {
        ...state,
        selected_post: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
