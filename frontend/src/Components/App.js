import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import PostList from './PostList';
import PostFilters from './PostFilters';
import Post from './Post'
import AddPostPage from './AddPostPage'
import { getVisiblePosts } from '../selectors/posts'
import { fetchPosts } from '../actions/posts'
import { fetchCategories } from '../actions/categories'
import { withRouter } from 'react-router-dom'

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    this.props.dispatch(fetchCategories());
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={PostFilters} />
        <Route exact path="/:category" component={PostFilters} />
        <hr/>
        
        <Route exact path="/:category" render = { (routeProps) => (
            <PostList 
              dispatch = {this.props.dispatch}
              posts={this.props.posts} 
              filter = {routeProps.match.params.category}
            />
          )
        }/>
        <Route exact path="/" render = { () => (
            <PostList 
              dispatch = {this.props.dispatch}
              posts={this.props.posts} 
              filter = {'all'}
            />
          )
        }/>
        
        <Route path="/:category/:post" render = { (routeProps) => (
            routeProps.match.params.category === "post" && routeProps.match.params.post === "new"
            ? <AddPostPage/>
            : <Post 
                post={this.props.posts.find(p => p.id === routeProps.match.params.post)}
              />
          )
        }/>
       
      </div>
    );
  }
}

const mapStateToProps = (state) =>  {
  return{
    ...this.props,
    posts: getVisiblePosts(state.posts, state.filters),
    categories: state.categories,
    filters: state.filters
  }
}

export default withRouter(connect(mapStateToProps)(App));
//{if props.filters.category === {post.}}
