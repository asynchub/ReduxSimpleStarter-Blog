import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'rooturl/api';
const API_KEY = '?key=....';

export function fetchPosts() {
  
  const url = `${ROOT_URL}/posts{API_KEY}`
  const request = axios.get(url);
  
  return (
    type: FETCH_POSTS,
    payload: request
  );
}
