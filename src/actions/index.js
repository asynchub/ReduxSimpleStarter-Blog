import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
// api has been setup to store blogposts
// going to make ajax requests to api and 
// return them by action creator fetchPosts as a promise in variable request.

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=FETCH7777';
const url = `${ROOT_URL}/posts${API_KEY}`;

export function fetchPosts() {
  const request = axios.get(url); // ajax request for data objects
  return (
    type: FETCH_POSTS,
    payload: request
  );
}
