import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";

import fetchQuoteReducer from "./reducer_fetchQuote";
import addRowToList from "./reducer_addRowToList";

const appReducer = combineReducers({
  form: formReducer,
  quote: fetchQuoteReducer,
  row: addRowToList
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
