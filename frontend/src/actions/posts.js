import * as API from '../utils/api';
import uuid from 'uuid';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const CHANGE_VOTE_SCORE = "CHANGE_VOTE_SCORE";
export const DELETE_POST = "DELETE_POST";


export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const deletePostAction = postId => ({
	type: DELETE_POST,
	postId: postId
})

export const changeVoteScoreAction = (postId, scoreChange) => ({
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
		timestamp: Date.now(),
		voteScore: 0,
		deleted: false,
		commentCount: 0
	}
	
});

export const editPost = ({title, author, body, category, id}) => ({
	type: EDIT_POST,
	post: {
		id,
		title,
		body,
		author,
		category,
	}
});


//Asyncs
export const fetchPosts = () => dispatch => (
  API
    .getAll()
    .then(  (posts) => {
    		dispatch(receivePosts(posts))
    	}	
    )
);

export const deletePost = (postId) => dispatch => (
	API
		.deletePost(postId)
		.then( () => {
			dispatch(deletePostAction(postId))
		})
)

export const changeVoteScore = (postId, scoreChange) => dispatch => (
	API
		.changeVoteScore(postId, scoreChange)
		.then( (data) => {
			dispatch(changeVoteScoreAction(postId, scoreChange))
		})
)

