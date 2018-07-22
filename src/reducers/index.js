// @flow

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import fetchQuoteReducer from "./reducer_fetchQuote";
import addRowToList from "./reducer_addRowToList";

const appReducer = combineReducers({
  form: formReducer,
  quote: fetchQuoteReducer,
  row: addRowToList
});

const initialState = {
  form: [],
  quote: 0,
  row: 0
}

const rootReducer = (state :Object = initialState, action: Object) => {
  return appReducer(state, action);
};

export default rootReducer;
