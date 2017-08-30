import { combineReducers } from 'redux';
import ReducerPosts from './reducer_posts';
// import reducer from redux-form and alias this to reduxForm
import { reducer as reduxForm } from 'redux-form';

// then add it as form property to object argument of combineReducer function:
const rootReducer = combineReducers({
  posts: ReducerPosts,
  form: reduxForm
});

export default rootReducer;
