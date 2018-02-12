import * as API from '../utils/api';
import uuid from 'uuid';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = "ADD_POST"

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

export const addPost = ( { title='', author='', body='', category='redux'} = {} ) => ({
	type: ADD_POST,
	post: {
		id: uuid(),
		title,
		body,
		author,
		category,
		voteScore: 0,
		deleted: false,
		commentCount: 0 
	}
	
});