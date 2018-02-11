import React, {Component} from 'react'

class PostForm extends Component {

	constructor(props) {
	  super(props);
	  if(props.post){
	  	this.state = {
		    props
	  	};
	  }else{
	  	this.state = {
		    body: '',
			author: '',
			title: '',
			message: '',
			id: this.props.id
	  	};
	  }
	  
	}
	

	onPostBodyChange = (e) => {
		const body = e.target.value
		this.setState(() => ({ body }));
		
	};

	onTitleChange = (e) => {
		const title = e.target.value
		this.setState(() => ({ title }));
	};

	onAuthorChange = (e) => {
		const author = e.target.value
		this.setState(() => ({ author }));
	};

	onSubmitPost = (e) => {
		e.preventDefault();
		if(!this.state.body || !this.state.author || !this.state.title){
			this.setState(()=>({message: 'Please fill in all fields before submitting the post'}))
		}else{
			this.setState(()=>({message: ''}));
			this.props.onSubmit({
				title: this.state.title,
				author: this.state.author,
				body: this.state.body,
			})
		}
	};

	render() {
		return(
			<div> 
				{this.state.message &&
					<p> {this.state.message} </p>}
				<form onSubmit={this.onSubmitPost}>
					<input
						type="text"
						placeholder="Title"
						autoFocus
						value={this.state.title}
						onChange={this.onTitleChange}
					/>
					<input
						type="text"
						placeholder="Author"
						value={this.state.author}
						onChange={this.onAuthorChange}
					/>
					<textarea
						placeholder="write your post here.."
						value={this.state.body}
						onChange={this.onPostBodyChange}
					/>
					<button>
						Add Post
					</button>
				</form>
			</div>
		)
	}
}

export default PostForm;