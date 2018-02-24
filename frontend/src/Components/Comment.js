import React, {Component} from 'react';
import { changeVoteScoreComment } from '../actions/comments'
import { connect } from 'react-redux';
import { deleteComment } from '../actions/comments'
import { Link } from 'react-router-dom'

class Comment extends Component {	

	constructor(props){
		super(props);
		this.handleUpVote = this.handleUpVote.bind(this);
		this.handleDownVote = this.handleDownVote.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
	}

	handleUpVote () {
		this.props.dispatch(changeVoteScoreComment(this.props.comment.id, 1));
	}

	handleDownVote() {
		this.props.dispatch(changeVoteScoreComment(this.props.comment.id, -1));
	}

	deleteComment() {
		this.props.dispatch(deleteComment(this.props.commentId));
	}

	render(){
		if(this.props.comment && !this.props.comment.deleted){
			return(
				<div key={this.props.comment.id}> 
					<p>{this.props.comment.body} </p>
					{`Score: ${this.props.comment.voteScore}`}
					<button onClick={this.handleUpVote}>up</button> 
					<button onClick={this.handleDownVote}>down</button>
					<button onClick={this.deleteComment}>delete</button>
					{this.props.post && 
						<Link 
							to={`/${this.props.post.category}/${this.props.post.id}/comments/${this.props.comment.id}/edit`}
						>
          					<button>Edit</button>
          				</Link>
					}
				</div>
			)
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.commentId;
	const comment = state.comments.find(c => c.id === id)
	return({
		post: state.posts.find(p => p.id === comment.parentId),
		comment: comment,
	})
}

export default connect(mapStateToProps)(Comment);