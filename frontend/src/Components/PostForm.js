import React, {Component} from 'react';
import { connect } from 'react-redux';

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
			category: '',
			id: this.props.id
		};
	  }
	  //How can I do this more elegant? Application crashed once, because this.props.categories was undef?
	  this.props.categories && this.setState(() => ({category: this.props.categories[0].name}))
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
	}

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
				category: this.state.category
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
					<select value={this.state.value} onChange={this.onChangeCategory}>
						{this.props.categories && this.props.categories.map( (category) => {
							return <option value={category.name}>{category.name}</option>
						})}
			        </select>
					<button>
						Add Post
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