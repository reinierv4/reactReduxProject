import * as API from '../utils/api';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = (postId) => dispatch => (
  API
    .getComments(postId)
    .then(  (comments) => {
    		dispatch(receiveComments(comments))
    	}	
    )
);
