import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

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
        Header
        <Route path="hi" component={Hello} />
        <Route path="byyye" component={Bye} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
