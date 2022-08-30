import {combineReducers, createStore} from 'redux';

import todoReducer from '../features/Todo/reducer';

let rootReducers = combineReducers({
    todo: todoReducer
});

let store = createStore(rootReducers);

export default store;