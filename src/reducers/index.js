import { combineReducers } from 'redux';
import ReducerPosts from './reducer_posts';

// import reducer from redux-form and alias this to formReducer
// and hook it up to combinedReducers call below
import { reducer as formReducer } from 'redux-form';
// internally, redux-form uses our redux store instance, for
// handling all the state has been produced by the form.

// then add it as form property to object argument of combineReducer function:
const rootReducer = combineReducers({
  posts: ReducerPosts,

  // important to assign the formReducer to keyword form,
  // then all the different forms that we hook up inside of different
  // components are going to assume, that the formReducer is being applied to
  // form piece of state.
  // then formReducer to be applied to form peace of state
  form: formReducer
});

export default rootReducer;

// how to use redux-form
// identify different pieces of state of form
// make Field component for each different state of form
// a Field component is created by redux-form for us
// we have to tell the Field: what type of input are we going to take from the user:
// radio button, check box or text input, or file input, or other.
// when user changes the input, by using it, then:
// internally, redux-form is going to automatically handle all these changes for us:
// redux-form is managing automatically event handlers, state changes, input value changes;
// no action creators needed to decare to handle form events;
// when user submits the form, then
// we are going to pass 2 callbacks to redux-form, that:
// validate the different inputs, provided by user, and
// if the input is valid, then handle the form submittal
// after input validation and handling of form submittal the redux-form hands control to us:
// then we are free to save input data to server or whatever we want to do with this.
