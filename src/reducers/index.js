import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

import fetchQuoteReducer from './reducer_fetchQuote';


const appReducer = combineReducers({
    form : formReducer,
    quote: fetchQuoteReducer
});

const rootReducer = (state, action) => {
  return appReducer(state,action)
}

export default rootReducer;


