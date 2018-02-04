const api_root = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
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



