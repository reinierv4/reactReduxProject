import React, { Component } from 'react';
import PostListItem from './PostListItem'
import { filterByCategory } from '../actions/filters'
import { Link } from 'react-router-dom'


class PostList extends Component {
	
  componentDidMount() {
     this.props.dispatch(filterByCategory(this.props.filter));
  }

 //  componentWillReceiveProps() {
	//    this.props.dispatch(filterByCategory(this.props.filter));
	// }

	render(){
		return(
			<div>
        <ul className="post-list">
        	{this.props.posts &&
            this.props.posts.map(post => {
              return(
                <li className="post-item" key={post.id} > 
              		<PostListItem post={post} />
              	</li>
              )
            })
          }
        </ul>
        <Link to={'/post/new'}
          style={{ textDecoration: 'none', color: 'black'}} 
        >
          Add Post
        </Link>
      </div>
    );
  }
}

export default PostList;