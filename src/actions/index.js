import jsonPlaceholder from "../apis/jsonPlaceholder";

// An asynchronous action creator
// A function that returns a function
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  // return an action
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  // return an action
  dispatch({ type: "FETCH_USER", payload: response.data });
};
