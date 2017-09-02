import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendPost } from '../actions/index'
// 1
// import Field and reduxForm
import { Field, reduxForm } from 'redux-form';
// Field is a react component, that is automatically wired to redux-form
// reduxForm is a function, (very similar to the connect helper, which
// provides comonents to become container)
// reduxForm is integrated inside of our application
// reduxForm allows this component to communicate with that additional formReducer, that
// has been wired in rootReducer, so:
// reduxForm allow this component to talk directly to redux store
// so, after this wiring up, this component will directly communicate to the form reducer

// 3
// after the reduxForm helper is attached to this component:
// set up the actual form and wire up the Field
// make form element with Field inside of it
// Field is used to specify an input inside of this component
// Field has 2 properties: name and component
// name refers to piece of state of this form
// component takes the function or another component that will be called automatically to
// display the Field component.
// explanations:
// a Field component knows how to communicate with reduxForm
// Field component knows how to interact with redux form
// Field component does wiring up of event handlers, action creators, but
// Field component does not know how to produce JSX to show itself on the screen
// Field component has 2 properties
// name refers to and names the piece of state of this form
// component property purpose is: to add in a function with
// JSX, that will show Field component on the screen.
// our job is to define component property, defining: how the field is shown on the screen.
// define the helper function that will be called with argument: field
// the field object contains event handlers, that we need to wire up to
// JSX, returned from the helper function
// field.input contains bunch of differnt event handlers and differnt props
// it also has the value of the input
// {...field.input} syntax means: all of the field.input object's properties to be communicated to
// the <input> tag, inside which field input is stated
// also specify the type of the input in your JSX inside <input> tag
// when generalizing field, then we can pass arbitrary properties via field argument
// arbitrary properties will be automatically attached to field argument

import { Link } from 'react-router-dom';

class PostsNew extends Component {

  // helper function to generalize the field
  renderField(field) {
    const { meta: { touched, error } } = field; // destructuring of chaned properties { touched } === { touched: touched }
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }
  // apply conditional statemnets inside className declaration

  onSubmit(values) {
    sendPost(values, () => {
      this.props.history.push('/');
    });
    // 6
    // programmatic navigation:
    // sometimes we need to navigate with callback instead of using Link tag, an UI navigation.
    // in this case we do not need the link to another set of component, but
    // need to use programmatic navigation, which will occur after the api request
    // is complete. therefore, we need to wait until it completes.
    // in fact, to handle programmatic navigation react-router passes in a big set of
    // props into our component PostsNew, that is being rendered by a Route (see index.js).
    // for programmatic navigation we will use this.props.hystory.push('/')
    // important is to make such navigation after the post has been created.
    // therefore, pass this as a callback to function, that shall complete api request
    // before we render the page we navigate to.
    // make sure, that action creator has a callback as a last argument and calls that
    // on promise by syntax: promise.then(() => callback());
  }

  render() {
    const { handleSubmit } = this.props; // === const handleSubmit = this.props.handleSubmit;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}
// 5
// submitting and passing data to backend:
// redux-form handles the state of the form: values, validation, events,
// however, redux-form does not take care of posting form data to back-end server
// redux-form is not involved in process for back-end
// it is our job to handle infomation from the form to back-end, or
// to make something other than handling the state, validation, values
// therefore, onSubmit event handler of form needs to involve some code from redux-form, and
// some code, that we write ourselves
// to make it work:
// pull off the property handleSubmit from this.props, like so: const { handleSubmit } = this.props;
// which is available in this component, because we wired up reduxForm to this PostsNew component -
// remember, this binding adds tons of additional properties to our component PostsNew.
// then pass handleSubmit(this.onSubmit.bind(this)) to onSubmit in the form element
// this.onSubmit is the helper function that we define in this component with
// parameter values, like so: onSubmit(values)
// so, handleSubmit takes a function onSubmit, that is defined by us as a callback.
// after handleSubmit validates the inputs from the form and
// successfully completes another redux-part of work, then
// it calls a callback function: onSubmit, that passes us the values out of the
// form to work with them further for back-end.
// .bind(this) is just to bind the callback to execution context of instance of this PostsNew component, where
// this === component


// 4
// validate
// declare the function validate with values argument, and
// hook it up to PostsNew component via property of function argument of reduxForm
// values argument is the object, that passes the properties of form Fields, declared above
function validate(values) {
  // create empty object errors here, first:
  const errors = {};

  // use if statements to validate inputs and set errors object properties:
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter a category";
  }
  if (!values.content) {
    errors.content = "Enter a content text";
  }

  // then return the errors object and it will be handled to form automatically
  // further to show the validation results in the Fields
  return errors;
}
// then redux form is responsible for managing the state of the form
// just make it shown by using JSX on the renderField function via it's field object property
// the property meta.error is placed automatically to the field object in renderField helper function:
// this meta.error property is responsible for handling validation as well
// to show the error to user on the screen make reference in renderField helper function: {field.meta.error}
// there is 3 different state properties of form that we need to be aware of for
// each and every fielsd that we create:
// pristine: how every single input is rendered by default (when input first renders on the screen)
// - means no input has touched at yet and user has not selected it yet
// touched: user has selected or focused an input, and then focused out of the input
// - means user has done some work on this field and now considers it to be complete
// notvalid: when there the input is wrong according to validation
// so, touched state is the right one to show the error message to user
// for that, make the ternary operator in the renderField helper method:
// {field.meta.touched ? field.meta.error : ''}


// 2
// wire up reduxForm helper here as would use the connect helper in case of react-redux:
// attach reduxForm helper to this component:
// pass the configuration into reduxForm function:
// we pass a single argument, which is a function
// and this function is going to take some number of different configuration options
// in this case the only configuration we specify is the form option
// this form configuration option has value (a unique string) - the name of the form, kind of namespace
// in some cases we want to show multible forms on the single page at the same time
// using the same name of different forms will merge theese forms
// this name keeps different forms separated from each other
// just make sure, that the string name of form property is unique.
// 4: hook validate function up to PostsNew component via property of function argument of reduxForm
export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(null, { sendPost })(PostsNew)
);
