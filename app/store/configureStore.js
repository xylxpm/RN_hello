import {createStore,combineReducers,applyMiddleware} from 'redux';
import {calculate} from '../reducer/reducer';

const rootReducer=combineReducers({
    calculate
})

let store = createStore(rootReducer);

export const getStore=()=>{
    return store;
}