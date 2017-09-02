import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPost } from '../actions.index';


class PostsShow extends Component {

  componentDidMount() {
    // this is provided to us by react-router:
    // match is the top level poperty from react-router
    // params is an object that lists all the different tokens,
    // that exist inside the url.
    // id is one of our wildcards from the url
    const { id } = this.props.match.params; // destructuring is used
    this.props.fetchAPost(id);
  }

  render() {
    this.posts[this.props.match.params.id];
    return (
      <div>
        PostsShow
      </div>
    );
  }
}

// use mapStateToProps to bind the posts piece of state from reducers to
// this component.
// state argument here is the big lis of posts.
// with destructuring {} we make it as a variable posts
// use ownProps, that is cool to get the state own props
function mapStateToProps({ posts }, ownProps) {
  return { posts: [ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchAPost})(PostsShow);

// 1
// two scenarios here:
// first: user goes to start page and all posts are loaded
// second: user navigates directly to particulart post posts/:id
