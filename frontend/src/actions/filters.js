//SORT POSTS
//FILTER FOR CATEGORY
//SORT BY DATE
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
export const sortByDate = () => ({
	type: SORT_BY_DATE
});

export const filterByCategory = (category) => ({
	type: FILTER_BY_CATEGORY,
	category: category
})