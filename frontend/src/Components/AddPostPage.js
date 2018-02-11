import React from 'react';
import PostForm from './PostForm'

const AddPostPage = (props) => {
	return (
		<div> 
			<h1>Add Post</h1>
			<PostForm
				onSubmit={ (post) => {
					console.log(post);
				}}
			/>
		</div>
	)
}

export default AddPostPage;