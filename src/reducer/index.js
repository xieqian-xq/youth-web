import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import home from './homeReducer';
import test from './testReducer';

// 返回组合后的Reducers
export default combineReducers({
    router: routerReducer,
    test,
    home
})