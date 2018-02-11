// 自定义中间件
let middlewares =[];

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
        throw err
    }
}

middlewares.push(logger);
middlewares.push(crashReporter);

export default middlewares;
