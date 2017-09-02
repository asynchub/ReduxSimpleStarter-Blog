import axios from 'axios';

export const SEND_POST = 'SEND_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_A_POST = 'FETCH_A_POST';
export const DELETE_POST = 'DELETE_POST';

// api has been setup to store blogposts
// going to make ajax requests to api and
// return them by action creator fetchPosts as a promise in variable request.
// api has routes configured to fetch, create or delete posts

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=FETCH7777';
const url = `${ROOT_URL}/posts${API_KEY}`;

export function fetchPosts() {
  const request = axios.get(url); // ajax request for data objects
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function sendPost(values, callback) {
  const request = axios.post(url, values)
  .then(() => callback());
  return {
    type: SEND_POST,
    payload: request
  };
}

export function fetchAPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_A_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}
