import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// An asynchronous action creator
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  // return an action
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  // return an action
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // Redux-Thunk will invoke the inner functions
  await dispatch(fetchPosts());
  // extract the unique user ids into an array
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};
