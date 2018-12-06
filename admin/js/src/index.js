import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './iip-events-admin.css';

render(
  <App />,
  document.getElementById( 'iip-events-admin' )
);

if ( module.hot ) { module.hot.accept(); }
