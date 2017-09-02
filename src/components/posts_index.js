import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

  // the request is asyncronously called by fetchPosts action creator (browser wise)
  // therefore, there is no matter, by whom and when the fetchPosts is called
  // this is chosen react lifecicle method to fetch data upon component been loaded on the page
  // the components will be rerendered again, after fetchPosts payload been passed to state via
  // reducers and this time posts to be shown on the screen
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            Name: {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/posts/new">
          Add Post
        </Link>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex);
