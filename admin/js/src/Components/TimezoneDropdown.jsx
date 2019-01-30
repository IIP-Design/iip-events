import React from 'react';
import { arr, func, string } from 'prop-types';

const TimezoneDropdown = ( { callback, timezones, value } ) => (
  <div className="iip-event-timezone-dropdown">
    <label htmlFor="iip_event_timezone">
      Timezone:
      <select id="iip_event_timezone" name="eventTimezone" onChange={ callback }>
        { value ? (
          <option value={ value }>{ value }</option>
        ) : (
          <option value="">Select timezone</option>
        ) }
        { timezones.map( zone => (
          <option value={ zone.value }>{ `${zone.name} (${zone.gmtOffset})` }</option>
        ) ) }
      </select>
    </label>
  </div>
);

TimezoneDropdown.propTypes = {
  callback: func,
  timezones: arr,
  value: string
};

export default TimezoneDropdown;
