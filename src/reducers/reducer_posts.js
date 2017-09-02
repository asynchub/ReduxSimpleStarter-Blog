import { FETCH_POSTS } from '../actions/index';
import { FETCH_A_POST } from '../actions/index';
import _ from 'lodash';

export default function ReducerPosts(state = {}, action) {
  switch (action.type) {
    case FETCH_A_POST:
      // here we want to add the fetched post to state, because app state should
      // not be destrouyed.
      // Because of axios, we have access to action.payload.data and there is
      // an id prop as well.
      // ES5 syntax:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post
      // return newState;

      // ES6
      // use ES6 syntax here to add object to collection of objects:
      // const newCollection = { ...collection, [key]: value}
      return { ...state, [action.payload.data.id]: action.payload.data };
      // we are not making array here by [action.payload.data.id], but
      // we are doing key interpolation:
      // make a new key of whateveris in square brackets []
      // and set it's value to whatever is after the key and :

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
