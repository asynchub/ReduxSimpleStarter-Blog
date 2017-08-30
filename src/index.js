import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import promise from redux-promise and pass promise to applyMidleware call.
import { promise } from 'redux-promise';

// with BrowseRouter, here App is no longer rendering all components, so:
// delete App import statement and delete app.js component
// import App from './components/app';
import reducers from './reducers';
import PostsIndex from './components/posts_index';

// pass promise here to applyMiddleware call:
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Hello extends Component {
  render { return <div>hello</div> }
}
class Bye extends Component {
  render { return <div>bye</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
