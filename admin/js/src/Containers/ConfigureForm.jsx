import React, { Fragment } from 'react';

import DateSelector from './DateSelector';

const ConfigureForm = () => (
  <Fragment>
    <h2 className="iip-events-admin-metabox-header hndle ui-sortable-handle">Configure Your Event</h2>
    <div className="inside">
      <form>
        <label htmlFor="iip-events-title">
          Title:
          <input className="stacked" id="iip-events-title" type="text" />
        </label>
        <br />
        <label htmlFor="iip-events-desc">
          Enter a Description for your event:
          <textarea className="stacked" id="iip-events-desc" />
        </label>
        <br />
        <p>Include a time for your event?:</p>
        <label className="iip-events-radio" htmlFor="iip-events-time-yes">
          Yes
          <input className="iip-events-radio" id="iip-events-time-yes" type="radio" value />
        </label>
        <label className="iip-events-radio" htmlFor="iip-events-time-no">
          No
          <input checked className="iip-events-radio" id="iip-events-time-no" type="radio" value={ false } />
        </label>
        <p>Select the Date of your event:</p>
        <DateSelector />
      </form>
    </div>
  </Fragment>
);

export default ConfigureForm;
