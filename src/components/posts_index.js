import React from 'react';
import { connect } from 'react-redux';

class PostsIndex extends Component {
  const posts = {}; 
  
  containerDidMount() {
    posts = this.props.fetchPosts();
  }
  
  render() {
    return (
      <div>
        PostsIndex
      </div>
    );
  }
}

export default connect(null, {fetchPosts})(PostsIndex);
