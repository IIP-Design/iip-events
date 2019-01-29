import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './iip-events-front.css';

render(
  <App />,
  document.getElementById( 'iip-events-front' )
);

if ( module.hot ) { module.hot.accept(); }
