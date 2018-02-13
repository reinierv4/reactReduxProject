import React, {Component} from 'react';
import PostNotFound from './PostNotFound'
import CommentForm from './CommentForm'
import { connect } from 'react-redux';
import { fetchComments } from '../actions/comments'
import { withRouter } from 'react-router-dom'


class Post extends Component {	
	
	componentDidUpdate() {
		const {post} = this.props;
		if(post && !post.deleted ){
	    	this.props.dispatch(fetchComments(post.id));
	    }
	}

	render () {
		const {post} = this.props;
		if(post && !post.deleted){
		return(
			<div> 
				<h1>{`${post.title} by ${post.author}`}</h1>
				<section>{post.body}</section>
				<p>Submit new comment: </p>
				<CommentForm/>	
				<div> {`Score: ${post.voteScore}`} <button>up</button> <button>down</button></div> 
				{this.props.comments && 
					this.props.comments.map( (c) => {
						return (
							<div> 
								<p>{c.body} </p>
								{`Score: ${c.voteScore}`}<button>up</button> <button>down</button>
							</div>
						)
					})
				}

			</div>
		)
		}
		return (
			<PostNotFound/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		...this.props,
		comments: state.comments,
	};
}
export default withRouter(connect(mapStateToProps)(Post));


// "6ni6ok3ym7mf1p33lnez": {
//     id: '6ni6ok3ym7mf1p33lnez',
//     timestamp: 1468479767190,
//     title: 'Learn Redux in 10 minutes!',
//     body: 'Just kidding. It takes more than 10 minutes to learn technology.',
//     author: 'thingone',
//     category: 'redux',
//     voteScore: -5,
//     deleted: false,
//     commentCount: 0
//   }