import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { sortBy } from '../actions/filters'
import './App.css';

class PostListFilter extends Component {
	
  onChangeSorting = (e) => {
    const order = e.target.value;
    this.props.dispatch(sortBy(order));
  }

  render() {
    return (
    <div> 
      <ul className="cat-list">
        {this.props.categories &&
          this.props.categories.map(category => {
            return(
              <Link to={`/${category.name}`}
                style={{ textDecoration: 'none', color: 'black'}} 
                key={`/${category.name}`}
              > 
                <li className="cat-item" key={category.path} >
                  {category.name} 
                </li>
              </Link>
            )
          })
        }
        <Link to={'/'}
          style={{ textDecoration: 'none', color: 'black'}} 
          key={'/'}
        >      
          <li className="cat-item" key='/'>
            All 
          </li> 
        </Link>
      </ul>
      <select value={this.props.filters.sortBy} onChange={this.onChangeSorting}>
          <option value={"date"}>Date</option>
          <option value={"score"}>Votescore</option>
          <option value={"title"}>Title</option>
      </select>
    </div>
   )
  }
	

}

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
		categories: state.categories
	};
}
export default connect(mapStateToProps)(PostListFilter);
