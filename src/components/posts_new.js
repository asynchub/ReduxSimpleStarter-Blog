import React, { Component } from 'react';
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

class PostsNew extends Component {

  // helper function to generalize the field
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      <form>
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
      </form>
    );
  }
}

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
})(PostsNew);
