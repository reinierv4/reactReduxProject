import React from 'react';
import PostListItem from './PostListItem'


const PostList = (props) => {
	console.log(props.params);
	return(
		<ul className="post-list">
          {props.posts &&
            props.posts.map(post => {
              return(
                <li className="post-item" key={post.id} > 
                  <PostListItem post={post} />
                </li>
              )
            })
          }
        </ul>
	)

}

export default PostList;