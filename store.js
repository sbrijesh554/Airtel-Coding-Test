import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers';

const initialState = {};
const enhancers = [];
const middleware = [thunk];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

export const store = createStore(reducers, initialState, composedEnhancers);