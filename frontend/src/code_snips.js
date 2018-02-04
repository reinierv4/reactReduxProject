const getVisiblePosts = (posts, {text, sortBy}) => { //filter properties
	return posts.filter((posts) => {
		const startDateMatch =  typeof startDate !== 'number' || posts.createdAt >= startDate;
		const endDateMatch;
		const textMatch;

		return startDateMatch && endDateMatch && textMatch; //invludes object in filtered array if fullfilled
	}).sort((a,b) => {
		if(sortBy === 'date'){
			return a.createdAt < b.createdAt ? 1 : -1;
		}else if (sortBy === 'amount'){
			return a.amount < b.amount ? 1 : -1;
		}
	});
}

const store = createStore(
	combineReducers({
		posts: postsReducer,
		filters: filtersReducer
	})
});

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisiblePosts(state.posts, state.filters);
})

//Higher order component (HOC), is a component that renders another component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1> Info </h1>
		<p> The info is: {props.info} </p>
	</div> 
);
const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info please don't share</p>}
			<WrappedComponent {...props}/>
		</div>
	);
}
const AdminInfo = withAdminWarning(Info);

ReactDOM.reder(<AdminInfo isAdmin={false} info="There are the .. ")