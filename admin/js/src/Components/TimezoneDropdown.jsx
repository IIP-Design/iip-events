import React from 'react';
import { arr, func, string } from 'prop-types';

const TimezoneDropdown = ( { callback, timezones, value } ) => (
  <div className="iip-event-timezone-dropdown">
    <label className="iip-gut-inspector-label" htmlFor="iip_event_timezone">
      Timezone:
      <select
        id="iip_event_timezone"
        name="eventTimezone"
        onChange={ callback }
        value={ JSON.stringify( value ) }
      >
        { timezones.map( zone => (
          <option value={ JSON.stringify( zone.properties ) }>
            { `${zone.name} (GMT${zone.properties.gmtOffset})` }
          </option>
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
