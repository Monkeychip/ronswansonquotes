import { FETCH_QUOTE, ADD_ROW, ADD_ROW_RETURN_NEW_QUOTE } from "./types";

export function itemsHasErrored(bool) {
  return {
    type: "ITEMS_HAS_ERRORED",
    hasErrored: bool
  };
}
export function itemsIsLoading(bool) {
  return {
    type: "ITEMS_IS_LOADING",
    isLoading: bool
  };
}

export function fetchData() {

  return dispatch => {
    dispatch(itemsIsLoading(true));
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(fetchQuote(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function fetchQuote(quote) {
  return {
    type: FETCH_QUOTE,
    payload: quote
  };
}

export function addRowToList(data) {
  return {
    type: ADD_ROW,
    payload: data
  }
}

export function addRowReturnNewQuote(data) {
 return dispatch => {
  dispatch(addRowToList(data))
  dispatch(fetchData())
 }
}
