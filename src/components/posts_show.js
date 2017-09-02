import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPost } from '../actions.index';
import { Link } from 'redux-router-dom';


class PostsShow extends Component {

  componentDidMount() {
    // this is provided to us by react-router:
    // match is the top level poperty from react-router
    // params is an object that lists all the wildcard tokens,
    // that exist inside the url.
    // id is one of our wildcards from the url
    const { id } = this.props.match.params; // destructuring is used
    this.props.fetchAPost(id);
  }

  render() {
    const { post } = this.props;
    
    if (!post) {
      return <div>Loading...</div>
    }
    
    return (
      <Link to="/">Back to posts<Link>
      
      <div>
        <h3>Title: {post.title}</h3>
        <h6>Category: {post.categories}</h6>
        <p>{post.text}</p>
      </div>
    );
  }
}

// use mapStateToProps to bind the posts piece of state from reducers to
// this component.
// state argument here is the big lis of posts.
// with destructuring {} we make it as a variable posts
// use ownProps, that is cool to access props of this component
function mapStateToProps({ posts }, ownProps) {
  // this declares post and assigns it to what is in [] and returns it
  return { post: [ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchAPost})(PostsShow);

// 1
// two scenarios here:
// first: user goes to start page and all posts are loaded
// second: user navigates directly to particulart post posts/:id
