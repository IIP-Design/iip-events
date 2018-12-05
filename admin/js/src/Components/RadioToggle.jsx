import React, { Fragment } from 'react';
import { bool, func, string } from 'prop-types';

const RadioToggle = ( { callback, metavalue, option } ) => (
  <Fragment>
    <label className="iip-events-radio" htmlFor={ `_iip_events_${metavalue}_yes` }>
      Yes
      <input
        checked={ option }
        className="iip-events-radio"
        id={ `_iip_events_${metavalue}_yes` }
        name={ `_iip_events_${metavalue}_yes` }
        onChange={ callback }
        type="radio"
        value
      />
    </label>
    <label className="iip-events-radio" htmlFor={ `_iip_events_${metavalue}_no` }>
      No
      <input
        checked={ !option }
        className="iip-events-radio"
        id={ `_iip_events_${metavalue}_no` }
        name={ `_iip_events_${metavalue}_no` }
        onChange={ callback }
        type="radio"
        value={ false }
      />
    </label>
  </Fragment>
);

RadioToggle.propTypes = {
  callback: func,
  metavalue: string,
  option: bool
};

export default RadioToggle;
