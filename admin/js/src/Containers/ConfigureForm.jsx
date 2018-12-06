import React, { Component, Fragment } from 'react';

import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import RadioToggle from '../Components/RadioToggle';

import { getEventMeta } from '../utils/globals';

class ConfigureForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      eventTitle: getEventMeta.title,
      eventDesc: getEventMeta.description,
      eventDur: getEventMeta.duration,
      hasTime: getEventMeta.hasTime,
      multiDay: getEventMeta.multiDay
    };

    this.handleInputChange = this.handleInputChange.bind( this );
    this.handleRadioChange = this.handleRadioChange.bind( this );
  }

  handleInputChange( e ) {
    this.setState( {
      [e.target.name]: e.target.value
    } );
  }

  handleRadioChange( e ) {
    const selected = e.target.value;
    const isSelectedTrue = ( selected === 'true' );

    this.setState( {
      [e.target.dataset.alias]: isSelectedTrue
    } );
  }

  render() {
    const {
      eventDesc, eventDur, eventTitle, hasTime, multiDay
    } = this.state;

    return (
      <Fragment>
        <label htmlFor="iip_event_title">
          Title:
          <input
            className="wide-input stacked"
            id="iip_event_title"
            name="eventTitle"
            onChange={ this.handleInputChange }
            type="text"
            value={ eventTitle }
          />
        </label>
        <br />
        <label htmlFor="iip-event-desc">
          Enter a Description for your event:
          <textarea
            className="large-textarea stacked"
            id="iip_event_desc"
            name="eventDesc"
            onChange={ this.handleInputChange }
            value={ eventDesc }
          />
        </label>
        <div className="iip-event-datetime">
          <div className="iip-event-start-date">
            <p>Select the date of your event:</p>
            <DateSelector date={ getEventMeta.date } metavalue="date" />
          </div>
          <div className="iip-event-end-date">
            <p>Multi-day event?</p>
            <RadioToggle callback={ this.handleRadioChange } metavalue="multiDay" option={ multiDay } />
            { multiDay && (
              <Fragment>
                <br />
                <DateSelector date={ getEventMeta.endDate } metavalue="endDate" />
              </Fragment>
            ) }
          </div>
          <div className="iip-event-time">
            <p>Include a time for your event?:</p>
            <RadioToggle callback={ this.handleRadioChange } metavalue="hasTime" option={ hasTime } />
            { hasTime && (
              <Fragment>
                { /* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */ }
                <label htmlFor="iip_event_time">
                  <TimeSelector />
                </label>
                <p>Duration (in minutes):</p>
                <input
                  className="stacked"
                  id="iip_event_duration"
                  name="eventDur"
                  onChange={ this.handleInputChange }
                  type="text"
                  value={ eventDur }
                />
              </Fragment>
            ) }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ConfigureForm;
