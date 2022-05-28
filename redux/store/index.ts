import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducer/authReducer';
import { contactReducer } from '../reducer/contactReducer';

const reducers = combineReducers({
  auth: authReducer,
  contact: contactReducer,
});

const composeEnhacers =
  (process.env.NODE_ENV === 'development' &&
    (window as any)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhacers(applyMiddleware(thunk))
);