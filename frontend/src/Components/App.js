import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';
import PostFilters from './PostFilters';
import { getVisiblePosts } from '../selectors/posts'
import { fetchPosts } from '../actions/posts'
import { fetchCategories } from '../actions/categories'

import * as API from '../utils/api';

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    this.props.dispatch(fetchCategories());
  }
  
  render() {
    return (
      <div className="App">
        <PostFilters />
        <hr/>
        <ul className="post-list">
          {this.props.posts &&
            this.props.posts.map(post => {
              return(
                <li className="post-item" key={post.id} > 
                  <PostListItem post={post} />
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) =>  {
    return{
      posts: getVisiblePosts(state.posts, state.filters),
      categories: state.categories,
      filters: state.filters  
    }
}

export default connect(mapStateToProps)(App);
//{if props.filters.category === {post.}}
