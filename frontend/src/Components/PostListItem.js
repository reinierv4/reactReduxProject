import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({post}) => {
	return(
		<Link to={`/posts/${post.id}`}
        	style={{ textDecoration: 'none', color: 'black'}} 
    		> 
        	<div>
				<h3> {post.title} </h3>
			</div> 
    	</Link>
	)
}

export default PostListItem;

