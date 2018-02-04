import * as API from '../utils/api';

export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  API
    .getAll()
    .then(  (posts) => {
    		dispatch(receivePosts(posts))
    	}	
    )
);

