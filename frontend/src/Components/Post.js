import React from 'react';
import PostNotFound from './PostNotFound'
import { Link } from 'react-router-dom';


const Post = ({post}) => {	
	if(post){
		return(
			<h1> {post.body} </h1>
		)
	}
	return (
		<PostNotFound/>
	)
	
	
}

export default Post;
