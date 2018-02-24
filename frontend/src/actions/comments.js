import * as API from '../utils/api';
import uuid from 'uuid';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const CHANGE_VOTE_SCORE = "CHANGE_VOTE_SCORE";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const addCommentAction = (comment) => ({
	type: ADD_COMMENT,
	comment,
	
})

export const editCommentAction = (commentId, comment, timestamp)  => ({
	type: EDIT_COMMENT,
	commentId,
	comment,
	timestamp
})

export const deleteCommentAction = (commentId) => ({
	type: DELETE_COMMENT,
	commentId
})

export const changeVoteScoreCommentAction = (commentId, scoreChange) => ({
	type: CHANGE_VOTE_SCORE,
	commentId,
	scoreChange

})

//Asyncs

export const fetchComments = (postId) => dispatch => (
  API
    .getComments(postId)
    .then(  (comments) => {
    		dispatch(receiveComments(comments))
    	}	
    )
);

export const changeVoteScoreComment = (commentId, scoreChange) => dispatch => (
	API
		.changeVoteScoreComment(commentId, scoreChange)
		.then( (data) => {
			dispatch(changeVoteScoreCommentAction(commentId, scoreChange))
		})
)

export const deleteComment = (commentId) => dispatch => {
	API
		.deleteComment(commentId)
		.then( (data) => {
			dispatch(deleteCommentAction(commentId))
		})
}

export const editComment = (commentId, comment) => dispatch => {
	return(
		API
		.editComment(commentId, comment)
		.then( (data) => {
			dispatch(editCommentAction(commentId, comment, data.timestamp))
		})
	)
	
}
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