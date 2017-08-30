import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'rooturl';

export function fetchPosts() {
  
  const url = `${ROOT_URL}...`
  const request = axios.get(url);
  
  return (
    type: FETCH_POSTS;
    payload: 
  );
}
