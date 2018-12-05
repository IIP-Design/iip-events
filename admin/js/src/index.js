import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './iip-events-admin.css';

ReactDOM.render(
  <App />,
  document.getElementById( 'iip-events-admin' )
);

if ( module.hot ) { module.hot.accept(); }
