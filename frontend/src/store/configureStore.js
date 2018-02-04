import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import postsReducer from '../reducers/posts';
import commentsReducer from '../reducers/comments'
import categoriesReducer from '../reducers/categories'
import filtersReducer from '../reducers/filters';

export default () => {
	const store = createStore(
		combineReducers({
			posts: postsReducer,
			filters: filtersReducer,
			comments: commentsReducer,
			categories: categoriesReducer
		}), 
		applyMiddleware(thunk)
	);
	return store;
}


