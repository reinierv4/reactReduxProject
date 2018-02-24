import React, {Component} from 'react'

class CommentForm extends Component {
	
	state = {
		comment: '',
		author: ''
	}

	onCommentChange = (e) => {
		const comment = e.target.value;
		this.setState( () => ({ comment }) );
	}

	onAuthorChange = (e) => {
		const author = e.target.value;
		this.setState( () => ({ author }) );
	}

	onSubmitComment = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.comment, this.state.author);
	}

	render() {
		return(
			<div> 
				<form onSubmit={this.onSubmitComment}>
					<input
						type="text"
						placeholder="Your name.."
						value={this.state.author}
						onChange={this.onAuthorChange}
					/>
					<textarea
						placeholder="write your comment here.."
						value={this.state.comment}
						onChange={this.onCommentChange}
					/>
					<button> Submit Comment </button>
				</form>
			</div>
		)
	}

};

export default CommentForm