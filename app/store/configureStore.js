import {createStore, combineReducers, applyMiddleware} from 'redux';
import {calculate} from '../reducer/reducer';

const rootReducer = combineReducers({
    calculate
});

const thunk = store => next => action => {
    typeof action === 'function' ? action(store.dispatch, store.getState) : next(action)
}

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        })
        throw err
    }
}

let createStoreWithMiddleware = applyMiddleware(
    logger,thunk,crashReporter
)(createStore)


let store = createStoreWithMiddleware(rootReducer);

export const getStore = () => {
    return store;
}