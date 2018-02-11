import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import home from './homeReducer';

// 返回组合后的Reducers
export default combineReducers({
    router: routerReducer,
    home
})