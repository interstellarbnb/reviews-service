import React from 'react';
import ReactDOM from 'react-dom';
// if I want to use Promises, array.includes or other newer JavaScript methods, I need to
// download polyfill and import it here.
// Ask Bryce and Henry for help.
// https://babeljs.io/docs/usage/polyfill/

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);

module.hot.accept();