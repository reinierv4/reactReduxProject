import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostList from './PostList';
import PostFilters from './PostFilters';
import { getVisiblePosts } from '../selectors/posts'
import { fetchPosts } from '../actions/posts'
import { fetchCategories } from '../actions/categories'
import { filterByCategory } from '../actions/filters'
import * as API from '../utils/api';

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    this.props.dispatch(fetchCategories());
    //this.props.dispatch(filterByCategory(state.match.params.category));
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={PostFilters} />
        <Route exact path="/:category" component={PostFilters} />
        <hr/>
        {console.log(this.props)}
        <Route exact path="/:category" render = { () => (
            <PostList 
              posts={this.props.posts} 
            />
          )
        }/>
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
