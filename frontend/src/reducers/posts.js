import * as constants from '../actions/posts.js';

const postReducerDefaultState = []

const postReducer = (state = postReducerDefaultState, action) => {
	switch (action.type) {
		case constants.RECEIVE_POSTS:
			return state.concat(action.posts);
		case constants.ADD_POST:
			return state.concat(action.post)
		case constants.CHANGE_VOTE_SCORE:
			return state.map( (p) => {
				if(p.id === action.postId){
					return({
						...p,
						voteScore: p.voteScore + action.scoreChange
					})
				}else{
					return p
				}
			})
		case constants.DELETE_POST:
			return state.map( (p) => {
				if(p.id === action.postId){
					return({
						...p,
						deleted: true
					})
				}else{
					return p
				}
			})
		default: 
			return state;
	}
};

export default postReducer