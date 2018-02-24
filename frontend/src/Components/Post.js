import React, {Component} from 'react';
import PostNotFound from './PostNotFound'
import CommentForm from './CommentForm'
import { connect } from 'react-redux';
import { fetchComments } from '../actions/comments';
import { changeVoteScore } from '../actions/posts';
import { addComment } from '../actions/comments';
import { deletePost } from '../actions/posts';
import { withRouter, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';



class Post extends Component {	
	
	componentDidMount() {
		this.props.dispatch(fetchComments(this.props.postId));
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
					<CommentForm 
						onSubmit={ (comment, author) => {
							this.props.dispatch( addComment(post.id, comment, author) )
						}}
					/>	
					<div> {`Score: ${post.voteScore}`} <button onClick={this.handleUpVote}>up</button> <button onClick={this.handleDownVote}>down</button></div> 
					<button onClick={this.deletePost}>Delete</button>
					<Link to={`/${post.category}/${post.id}/edit`}>
          				<button>Edit</button>
        			</Link>
        			{this.props.comments && 
						Object.entries(this.props.comments).map( (c) => {
							return (
								<div key={c[1].id}> 
									<p>{c[1].body} </p>
									{`Score: ${c[1].voteScore}`}<button>up</button> <button>down</button>
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

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps,
		comments: state.comments,
	};
}
export default withRouter(connect(mapStateToProps)(Post));


