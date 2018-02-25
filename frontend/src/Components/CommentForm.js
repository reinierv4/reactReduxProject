import React, {Component} from 'react'

class CommentForm extends Component {
	
	

	constructor(props) {
	  super(props);
	  const { comment } = props;
	  this.state = {
			comment: comment ? comment.body : '',
			author: comment ? comment.author : '',
			editForm: comment ? true : false
		}
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
		
		if(this.state.editForm){
			this.props.onSubmit(this.state.comment)
		}else{
			this.props.onSubmit(this.state.comment, this.state.author)
		}
	}

	render() {
		return(
			<div> 
				<form onSubmit={this.onSubmitComment}>
					<input
						type="text"
						placeholder="Your name.."
						readOnly={this.state.editForm}
						value={this.state.author}
						onChange={this.onAuthorChange}
					/>
					<textarea
						placeholder="write your comment here.."
						value={this.state.comment}
						onChange={this.onCommentChange}
					/>
					{this.state.editForm ? <button> Edit Comment </button> : <button> Submit Comment </button>}
					
				</form>
			</div>
		)
	}

};

export default CommentForm