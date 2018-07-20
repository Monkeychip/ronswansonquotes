import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'
import { store, persistor } from './reduxStore';
import { PersistGate } from 'redux-persist/integration/react';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.querySelector('#root'));
  registerServiceWorker();



/*
* import { store, persistor } from './reduxStore';

class Dashboard extends Component {

	render() {
		return (
			 <Provider store={store}>
  				<PersistGate loading={null} persistor={persistor}>
  					<Router history={browserHistory}>
  	  					<Route path="/" component={ App }> </Route>
  	  					<Route path="/about" components={ About }></Route>
  	  					<Route path="/table" components={ Table }></Route>
  	 				</Router>
  				</PersistGate>
 			 </Provider>
		)
	}
}

ReactDOM.render(React.createElement(Dashboard, null),
	document.querySelector('.container')
);


* */