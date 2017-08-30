import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class PostsIndex extends Component {
  const posts = {}; 
  
  containerDidMount() {
    posts = this.props.fetchPosts();
  }
  
  renderPosts() {
    return (
      <h3>Posts</h3>
      <ul>
        _.map(this.props.posts, post => {
          return (
            <li>
            {post.title}
            </li>
          );
        }
      </ul>
    )  
  }  
  
  render() {
    return (
      <div>
        {this.renderPosts}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return this.state.posts;
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
