

export const getVisiblePosts = (posts, {category}) => { //filter properties
	console.log(category)	
	if(category == "all"){
		return posts
	}else{
		return posts.filter((post) => {
			return post.category === category
		})
	}
}

	// return posts.filter((posts) => {
	// 	const startDateMatch =  typeof startDate !== 'number' || posts.createdAt >= startDate;
	// 	const endDateMatch;
	// 	const textMatch;

	// 	return startDateMatch && endDateMatch && textMatch; //invludes object in filtered array if fullfilled
	// }).sort((a,b) => {
	// 	if(sortBy === 'date'){
	// 		return a.createdAt < b.createdAt ? 1 : -1;
	// 	}else if (sortBy === 'amount'){
	// 		return a.amount < b.amount ? 1 : -1;
	// 	}
	// });
