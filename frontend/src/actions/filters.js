//SORT POSTS
//FILTER FOR CATEGORY
//SORT BY DATE
export const SORT_BY = 'SORT_BY';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'


export const sortBy = (order) => ({
	type: SORT_BY,
	order: order
});

export const filterByCategory = (category) => ({
	type: FILTER_BY_CATEGORY,
	category: category
})