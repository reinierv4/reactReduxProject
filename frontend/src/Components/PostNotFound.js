import React from 'react';
import { Link } from 'react-router-dom';


const PostNotFound = () => {	
	return(
		<div>
			<h1> Post not found..  </h1>
			<Link to={'/'}
            style={{ textDecoration: 'none', color: 'black'}} 
            key={'/'}
      > 
      	<div className="cat-item" key='/'>
              Home
        </div> 
      </Link>
    </div> 
 	)
}

export default PostNotFound;
