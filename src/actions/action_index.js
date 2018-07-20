import react from 'react';
import {
  FETCH_QUOTE
} from './types';

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';


export function fetchQuote(){
  let quote = fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(function(response) {
      return response.json();
    })
  console.log(quote,"quote");

  return {
    type: FETCH_QUOTE,
    payload: quote
  }
}