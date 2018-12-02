import React, { Fragment } from 'react';

import DateSelector from './DateSelector';
import { eventParams } from '../utils/globals';

const ConfigureForm = () => (
  <Fragment>
    <form name="iip_events_form">
      <label htmlFor="_iip_events_title">
        Title:
        <input
          className="stacked"
          id="_iip_events_title"
          name="_iip_events_title"
          type="text"
          value={ eventParams.eventTitle || '' }
        />
      </label>
      <br />
      <label htmlFor="_iip-events-desc">
        Enter a Description for your event:
        <textarea
          className="stacked"
          id="_iip_events_desc"
          name="_iip_events_desc"
          value={ eventParams.eventDesc || '' }
        />
      </label>
      <br />
      <p>Include a time for your event?:</p>
      <label className="iip-events-radio" htmlFor="_iip_events_time_yes">
        Yes
        <input
          className="iip-events-radio"
          id="_iip_events_time_yes"
          name="_iip_events_time_yes"
          type="radio"
          value
        />
      </label>
      <label className="iip-events-radio" htmlFor="_iip_events_time_no">
        No
        <input
          checked
          className="iip-events-radio"
          id="_iip_events_time_no"
          name="_iip_events_time_no"
          type="radio"
          value={ false }
        />
      </label>
      <p>Select the Date of your event:</p>
      <DateSelector />
    </form>
  </Fragment>
);

export default ConfigureForm;
