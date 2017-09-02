import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';


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

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // this.posts[this.props.match.params.id];
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back to posts</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
          >
          Delete Post
        </button>
        <h3>Title: {post.title}</h3>
        <h4>Category: {post.categories}</h4>
        <p>{post.content}</p>
      </div>
    );
  }
}

// use mapStateToProps to bind the posts piece of state from reducers to
// this component.
// state argument here is the big lis of posts.
// with destructuring {} we make it as a variable posts
// use ownProps, that is cool to get the props of this component here
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchAPost, deletePost})(PostsShow);

// 1
// two scenarios here:
// first: user goes to start page and all posts are loaded
// second: user navigates directly to particulart post posts/:id
