import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=FETCH7777';
const url = `${ROOT_URL}/posts${API_KEY}`;

export function fetchPosts() {
  const request = axios.get(url);
  return (
    type: FETCH_POSTS,
    payload: request
  );
}
