import React, {Component} from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {

	constructor(props) {
	  super(props);
	  const { post } = props;
	  if(post){
	  	this.state = {
		    body: post.body,
			author: post.author,
			title: post.title,
			message: '',
			category: post.category,
			id: post.id,
			edit: true
	  	};
	 }else{
	  	this.state = {
		    body: '',
			author: '',
			title: '',
			message: '',
			category: this.props.categories[0] ? this.props.categories[0].name : "",
			id: this.props.id,
			edit: false
		};

	  }
	}
	
	onPostBodyChange = (e) => {
		const body = e.target.value;
		this.setState(() => ({ body }));
		
	};

	onTitleChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({ title }));
	};

	onAuthorChange = (e) => {
		const author = e.target.value;
		this.setState(() => ({ author }));
	};

	onChangeCategory = (e) => {
		const category = e.target.value;
		this.setState(() => ({category}))
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
				category: this.state.category,
				id: this.state.id
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
					<select value={this.state.category} onChange={this.onChangeCategory}>
						{this.props.categories && this.props.categories.map( (category) => {
							return <option key={category.name} value={category.name}>{category.name}</option>
						})}
			        </select>
					<button>
						{this.state.edit ? "Edit Post" : "Add Post"}
					</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		categories: state.categories
	}
}

export default connect(mapStateToProps)(PostForm);