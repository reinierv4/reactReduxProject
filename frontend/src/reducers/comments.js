import * as constants from '../actions/comments.js';

const commentReducerDefaultState = []

const commentReducer = (state = commentReducerDefaultState, action) => {
	switch (action.type) {
		case constants.RECEIVE_COMMENTS:
			return action.comments;
		default: 
			return state;
	}
};

export default commentReducer