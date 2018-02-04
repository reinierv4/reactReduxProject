import * as constants from '../actions/posts.js';

const postReducerDefaultState = []

const postReducer = (state = postReducerDefaultState, action) => {
	switch (action.type) {
		case constants.RECEIVE_POSTS:
			return state.concat(action.posts);
		default: 
			return state;
	}
};

export default postReducer