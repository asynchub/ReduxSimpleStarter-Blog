import { FETCH_POSTS } from '../actions/index';
import _ from 'lodash';

export default function ReducerPosts(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:

      const posts = _.mapKeys(action.payload.data, 'id');
      return posts;
    default:
      console.log('in reducer');
      return state;
  }
}
