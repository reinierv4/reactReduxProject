const api_root = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

export const getAll = () => 
	fetch(`${api_root}/posts`, {headers})
	.then(res => res.json())
	.then(data => data)


export const getCategories = () => 
	fetch(`${api_root}/categories`, {headers})
	.then(res => res.json())
	.then(data => data.categories )


export const getComments = (postId) => 
	fetch(`${api_root}/posts/${postId}/comments`, {headers})
	.then(res => res.json())
	.then(data => data) 

export const addComment = (postId, comment) => 
	fetch(`${api_root}/comments`, 
			{ 	headers, 
				method: 'POST', 
				body: JSON.stringify({
					id: comment.id,
					timestamp: comment.timestamp,
					body: comment.body,
					author: comment.author,
					parentId: postId
				})
			}
		)

export const deletePost = (postId) => 
	fetch(`${api_root}/posts/${postId}`,{ headers, method: 'DELETE' })
	.then(res => res.json())
	.then(data => data)

export const changeVoteScore = (postId, scoreChange) => {
	const vote = scoreChange>0 ? "upVote" : "downVote";
	return(
		fetch(`${api_root}/posts/${postId}`,{ headers, method: 'POST', body: JSON.stringify({
			option: vote})
		})
		.then(res => res.json())
		.then(data => data)
	)
}

export const editComment = (commentId, comment) => 
	fetch(`${api_root}/comments/${commentId}`, {headers, method: 'PUT', body: JSON.stringify({
		body: comment,
		timestamp: Date.now()
		})
	})
	.then(res => res.json())
	.then(data => data)


export const deleteComment = (commentId) => 
	fetch(`${api_root}/comments/${commentId}`,{ headers, method: 'DELETE'})
	.then(res => res.json())
	.then(data => data)

export const changeVoteScoreComment = (commentId, scoreChange) => {
	const vote = scoreChange>0 ? "upVote" : "downVote";
	return(
		fetch(`${api_root}/comments/${commentId}`,{ headers, method: 'POST', body: JSON.stringify({
			option: vote})
		})
		.then(res => res.json())
		.then(data => data)
	)
}
	
	
	
	
	