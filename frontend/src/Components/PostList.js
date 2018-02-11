import React, { Component } from 'react';
import PostListItem from './PostListItem'
import { filterByCategory } from '../actions/filters'


class PostList extends Component {
	
  componentDidMount() {
     this.props.dispatch(filterByCategory(this.props.filter));
  }

  componentWillReceiveProps() {
	   this.props.dispatch(filterByCategory(this.props.filter));
	}

	render(){
		return(
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
        );
    }
}

export default PostList;