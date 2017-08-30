import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class PostsIndex extends Component {
  const posts = {}; 
  
  containerDidMount() {
    posts = this.props.fetchPosts();
  }
  
  renderPosts() {
    _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }  
  
  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return this.state.posts;
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
