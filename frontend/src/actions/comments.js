import * as API from '../utils/api';
import uuid from 'uuid';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const addCommentAction = (comment) => ({
	type: ADD_COMMENT,
	comment,
	
})

//Asyncs

export const fetchComments = (postId) => dispatch => (
  API
    .getComments(postId)
    .then(  (comments) => {
    		console.log(postId);
    		console.log(comments);
    		dispatch(receiveComments(comments))
    	}	
    )
);

export const addComment = (postId, comment, author) => (dispatch) => {
	const commentObject = {
		id: uuid(),
		parentId: postId, 
		body: comment,
		timestamp: Date.now(),
		author,
		voteScore: 0,
		deleted: false,
		parentDeleted: false
	}
	API
		.addComment(postId, commentObject)
		.then( () => {
			dispatch(addCommentAction(commentObject))
		})
}