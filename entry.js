// entry.js
// require("!style-loader!css-loader!./style.css") // 载入 style.css
require('./style.css') //另一种载入style.css 参考: http://webpackdoc.com/configuration.html
document.write('It works.')
document.write(require('./module.js'))

import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/js/app';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);