import * as constants from '../actions/categories'

const categoriesReducerDefaultState = [];

const categoriesReducer = (state = categoriesReducerDefaultState, action) => {
  
  switch (action.type) {
    case constants.RECEIVE_CATEGORIES:
      return state.concat(action.categories);
    default: 
      return state;
  }
};

export default categoriesReducer