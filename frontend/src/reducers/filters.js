import * as constants from '../actions/filters.js';

const filtersReducerDefaultState = {
	sortBy: 'date',
	category: 'all'
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case constants.SORT_BY:
			return {
				...state,
				sortBy: action.order
			};
		case constants.FILTER_BY_CATEGORY:
			return{
				...state,
				category: action.category
			}
		default: 
			return state;
	}
};

export default filtersReducer;