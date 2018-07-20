import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';


const appReducer = combineReducers({
    form : formReducer
});

const rootReducer = (state, action) => {
  return appReducer(state,action)
}

export default rootReducer;


