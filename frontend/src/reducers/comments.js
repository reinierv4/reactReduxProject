import * as constants from '../actions/comments.js';

const commentReducerDefaultState = []

const commentReducer = (state = commentReducerDefaultState, action) => {
	switch (action.type) {
		case constants.RECEIVE_COMMENTS:
			return action.comments;
		case constants.ADD_COMMENT:
			return state.concat(action.comment);
		case constants.CHANGE_VOTE_SCORE:
			return state.map(c => {
				if(c.id === action.commentId){
					return({
						...c,
						voteScore: c.voteScore + action.scoreChange
					})
				}
				return c
			})
		case constants.DELETE_COMMENT:
			return state.filter(c => c.id !== action.commentId)
		case constants.EDIT_COMMENT:
			return state.map(c => {
				if(c.id === action.commentId){
					return({
						...c,
						body: action.comment,
						timestamp: action.timestamp
					})
				}else{
					return c
				}
			})
		default: 
			return state;
	}
};

export default commentReducer

