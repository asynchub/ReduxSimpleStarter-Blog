import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import promise from redux-promise and pass promise to applyMidleware call.
import promise from 'redux-promise';

// with BrowseRouter, here App is no longer rendering all components, so:
// delete App import statement and delete app.js component
// import App from './components/app';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

// pass promise here to applyMiddleware call:
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

// how React Router works
// it has hystory package
// user changes url by clicking on some link, for example,
// then browser says to the hystory library: user changed url and here is the new one;
// hystory takes url, parses or makes some changes to it and passes url to React react router library
// so, hystory is communicating new route over to react router.
// React router is receiving new route and decides what set of components to be displayed on the screen, based
// on exactly what that new route is;
// our place is to setup the configuration inside router, to configure what components to display for each route
// once react router has decided, which components to display, it says to react:
// react, here is the new set of components to display and react router passes them to react to rener them
// ract takes components and renders them to the screen as content
// and react waits for new events from user
// this is idea of SPA, where changing url no longer sends new html docs,
// SPA idea has no navigation between distinct html docs, instead:
// we are always using the same html doc and relying on JS to change the set of components, that user sees,
// appearing on the screen.
