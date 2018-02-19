import React, { Component } from 'react';
import PostForm from './PostForm';
import { editPost } from '../actions/posts';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class EditPostPage extends Component {
	
	state = {
		redirect: false
	}

	render() {
		return(
			<div>
				<PostForm 
					post={this.props.post}
					onSubmit={ (post) => {
						this.props.dispatch( editPost(post) )
						this.setState({redirect: true})
					}}
				/>
				{this.state.redirect &&
					<Redirect to={{pathname: '/'}}/>}
			</div>
		)
	}
	
	
	
}


export default connect()(EditPostPage);