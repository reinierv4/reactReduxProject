import React, {Component} from 'react';
import PostNotFound from './PostNotFound'
import CommentForm from './CommentForm'
import { connect } from 'react-redux';
import { fetchComments } from '../actions/comments';
import { changeVoteScore } from '../actions/posts';
import { deletePost } from '../actions/posts';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


class Post extends Component {	
	
	componentDidMount() {
		const {post} = this.props;
		if(post && !post.deleted ){
	    	this.props.dispatch(fetchComments(post.id));
	    }
	}

	constructor(props){
		super(props);
		this.handleUpVote = this.handleUpVote.bind(this);
		this.handleDownVote = this.handleDownVote.bind(this);
		this.deletePost = this.deletePost.bind(this);
		this.state = {redirect: false};
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
		this.setState({
			redirect: true
		})

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
					<div> {`Score: ${post.voteScore}`} <button onClick={this.handleUpVote}>up</button> <button onClick={this.handleDownVote}>down</button></div> 
					<button onClick={this.deletePost}>Delete</button>
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
					{this.state.redirect && 
						<Redirect to={{pathname: '/'}}/>}
				</div>
			)
		}
		return (
			<div>
				<PostNotFound/>
				{this.state.redirect && 
						<Redirect to={{pathname: '/'}}/>}
			</div>
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