import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Components/Reviews.jsx'
// if I want to use Promises, array.includes or other newer JavaScript methods, I need to
// download polyfill and import it here.
// Ask Bryce and Henry for help.
// https://babeljs.io/docs/usage/polyfill/

ReactDOM.render(
  <Reviews />,
  document.getElementById('app')
);
