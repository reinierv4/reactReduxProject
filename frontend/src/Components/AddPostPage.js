import React, {Component} from 'react';
import PostForm from './PostForm'
import { connect } from 'react-redux'
import { addPost } from '../actions/posts'
import { Redirect } from 'react-router-dom'

class  AddPostPage extends Component {
	
	state = {
		redirect: false
	}


	render() {
		return (
			<div> 
				<h1>Add Post</h1>
				<PostForm
					onSubmit={ (post) => {
						this.props.dispatch( addPost(post) )
						this.setState({redirect: true})
					}}
				/>
				{this.state.redirect &&
					<Redirect to={{pathname: '/'}}/>}
			</div>
		)
	}
	
}

export default connect()(AddPostPage);



//Handle addComment action in reducer
//Change CommentScore
//Server connection, delete works (implemented but don't work)
//Add a sorting option on the main page
//Add data validation


//DONEDONEODNE