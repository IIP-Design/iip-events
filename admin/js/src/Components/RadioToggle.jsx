import React, { Fragment } from 'react';
import { bool, func, string } from 'prop-types';

const RadioToggle = ( { callback, metavalue, option } ) => (
  <Fragment>
    <label className="iip-event-radio" htmlFor={ `${metavalue}_yes` }>
      Yes
      <input
        checked={ option }
        className="iip-event-radio"
        data-alias={ metavalue }
        id={ `iip_event_${metavalue}_yes` }
        name={ `${metavalue}_yes` }
        onChange={ callback }
        type="radio"
        value
      />
    </label>
    <label className="iip-event-radio" htmlFor={ `${metavalue}_no` }>
      No
      <input
        checked={ !option }
        className="iip-event-radio"
        data-alias={ metavalue }
        id={ `iip_event_${metavalue}_no` }
        name={ `${metavalue}_no` }
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
