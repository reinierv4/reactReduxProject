import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { filterByCategory } from '../actions/filters'
import './App.css';

const PostListFilter = (props) => {
	
	return (
		<ul className="cat-list">
          {props.categories &&
            props.categories.map(category => {
              return(
                <button 
                    style={{ textDecoration: 'none', color: 'white'}}
                    onClick= {() => {
			          props.dispatch(filterByCategory(category.name))
			        }}
                  >
                  <li className="cat-item" key={category.path} >
                    {category.name} 
                  </li>
                </button>
                  
                )
            })
          }
          <button style={{ textDecoration: 'none', color: 'white'}} 
          	onClick={() => {
	        	props.dispatch(filterByCategory('all'))
	      	}}
	      > 
	        <li className="cat-item" key='/'>
            	All 
            </li> 
		  </button>
		  
   		</ul>
   	)

}

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
		categories: state.categories
	};
}
export default connect(mapStateToProps)(PostListFilter);
