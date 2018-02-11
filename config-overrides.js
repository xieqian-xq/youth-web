// create-react-app默认把配置都隐藏起来
// 用一个优雅的框架react-app-rewired来重写配置
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    return config;
};