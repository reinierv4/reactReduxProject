export const getVisiblePosts = (posts, {category, sortBy}) => { 
	
	if(category === "all"){
		return sortPosts(posts)
	}else{
		return sortPosts(posts.filter((post) => {
			return post.category === category
		}))
	}

	function sortPosts(posts){
		return (posts).sort((a,b) => {
			if(sortBy === 'date'){
				return a.timestamp < b.timestamp ? 1 : -1
			}else if(sortBy === 'score'){
				return a.voteScore < b.voteScore ? 1 : -1
			}else if(sortBy === 'title'){
				console.log("sorting by title..");
				return a.title < b.title ? -1 : 1
			}else{
				return posts
			}
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
