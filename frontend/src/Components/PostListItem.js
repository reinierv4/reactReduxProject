import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeVoteScore, deletePost } from '../actions/posts'

class PostListItem extends Component {
	
	constructor(props){
		super(props);
		this.handleUpVote = this.handleUpVote.bind(this);
		this.handleDownVote = this.handleDownVote.bind(this);
		this.deletePost = this.deletePost.bind(this);
	}

	handleUpVote () {
		const {post} = (this.props)
		this.props.dispatch(changeVoteScore(post.id, 1));
	}

	handleDownVote() {
		const {post} = this.props;
		this.props.dispatch(changeVoteScore(post.id, -1));
	}

	deletePost() {
		const {post} = this.props;
		this.props.dispatch(deletePost(post.id));
	}

	render() {
		const { post }  = this.props;
		if(!post.deleted){
		return(
			<div>
				<Link to={`/${post.category}/${post.id}`}
	        		style={{ textDecoration: 'none', color: 'black'}} 
	    		> 
		        <h3> {post.title} </h3>
				</Link>
				<div> {`Score: ${post.voteScore}`} <button onClick={this.handleUpVote}>up</button> <button onClick={this.handleDownVote}>down</button></div> 
				<button onClick={this.deletePost}>Delete</button>
				<Link to={`/${post.category}/${post.id}/edit`}>
          			<button>Edit</button>
        		</Link>	
				<p> Comments: {post.commentCount} </p>
			</div> 
	    	
		)
		}else{
			return ("")
		}
	}
	
}




export default connect()(PostListItem);

