import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './styles/iip-events-front.scss';

const attachTo = document.getElementById( 'iip-event-add-to-cal' );

if ( attachTo ) {
  render( <App />, attachTo );
}


if ( module.hot ) { module.hot.accept(); }
