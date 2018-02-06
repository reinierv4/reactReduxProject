import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({post}) => {
	if(!post.deleted){
		return(
			<Link to={`/${post.category}/${post.id}`}
	        	style={{ textDecoration: 'none', color: 'black'}} 
	    	> 
		        <div>
					<h3> {post.title} </h3>
					<p> Score: {post.voteScore}</p>	
				</div> 
	    	</Link>
		)
	}else{
		return ("")
	}
}

export default PostListItem;

