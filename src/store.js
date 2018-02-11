import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import userDefinedMiddleware from './middleware';
import rootReducer from './reducer';

export const history = createHistory();

/** 初始化state */
let initialStates = {};

/** 中间件 */
let middlewares = [];

/** 强化createStore函数 */
let enhancers = [];

/** 添加中间件 */
middlewares.push(routerMiddleware(history));
middlewares.push(...userDefinedMiddleware);

/** 组合createStore函数，返回一个组合后的createStore函数 */
const composeEnhancer = compose(applyMiddleware(...middlewares),...enhancers);

/** 创建唯一的store */
const store = createStore(rootReducer, initialStates, composeEnhancer);

export default store;