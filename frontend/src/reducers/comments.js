import * as constants from '../actions/comments.js';

const commentReducerDefaultState = []

const commentReducer = (state = commentReducerDefaultState, action) => {
	switch (action.type) {
		case constants.RECEIVE_COMMENTS:
			return action.comments;
		case constants.ADD_COMMENT:
			console.log({...state, [action.comment.id]: action.comment})
			return {...state, [action.comment.id]: action.comment}
		default: 
			return state;
	}
};

export default commentReducer

