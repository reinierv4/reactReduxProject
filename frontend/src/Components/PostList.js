import React, { Component } from 'react';
import PostListItem from './PostListItem';
import { filterByCategory } from '../actions/filters';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class PostList extends Component {
	
  componentDidUpdate() {
    //This peice of code is executed here because I don't know how to dispatch this action within App.js 
    if(this.props.routeCategory !== this.props.category){
      this.props.dispatch(filterByCategory(this.props.routeCategory));
    }
  }

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

const mapStateToProps = (state) => {
  return({
    posts: state.posts,
    category: state.category,
  })
}
export default withRouter(connect(mapStateToProps)(PostList));