import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './styles/iip-events-admin.scss';

render(
  <App />,
  document.getElementById( 'iip-events-admin' )
);

if ( module.hot ) { module.hot.accept(); }
