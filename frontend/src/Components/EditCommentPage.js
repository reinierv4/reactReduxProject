import React, {Component} from 'react';
import CommentForm from './CommentForm';
import { editComment } from '../actions/comments';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class EditCommentPage extends Component{
	
	state = {
		redirect: false
	}

	render(){
		return(
			<div> 
				<CommentForm 
					onSubmit={ (comment) => {
						this.props.dispatch( editComment(this.props.comment.id, comment) );
						this.setState({
							redirect: true
						})
					}}
					comment={this.props.comment}
				/>
			{this.state.redirect && <Redirect to={{pathname: `/${this.props.post.category}/${this.props.post.id}`}}/>}
			</div>

		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const comment = state.comments.find(c => c.id === ownProps.commentId)
	return {
		comment,
		post: state.posts.find(p => p.id === comment.parentId)

	}
}
export default connect(mapStateToProps)(EditCommentPage);