import {combineReducers} from 'redux';
import {itemReducer, cartReducer} from './components/itemReducer';


export const reducers = combineReducers({
    items : itemReducer,
    cart : cartReducer
})