import * as API from '../utils/api';
import uuid from 'uuid';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = "ADD_POST";
export const CHANGE_VOTE_SCORE = "CHANGE_VOTE_SCORE";
export const DELETE_POST = "DELETE_POST";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const deletePost = postId => ({
	type: DELETE_POST,
	postId: postId
})

export const fetchPosts = () => dispatch => (
  API
    .getAll()
    .then(  (posts) => {
    		dispatch(receivePosts(posts))
    	}	
    )
);

export const changeVoteScore = (postId, scoreChange) => ({
	type: CHANGE_VOTE_SCORE,
	postId,
	scoreChange
})

export const addPost = ( { title='', author='', body='', category=''} = {} ) => ({
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