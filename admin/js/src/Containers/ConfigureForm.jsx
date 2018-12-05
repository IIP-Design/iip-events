import React, { Component, Fragment } from 'react';

import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import RadioToggle from '../Components/RadioToggle';

import { getEventMeta } from '../utils/globals';

class ConfigureForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      title: getEventMeta.title,
      description: getEventMeta.description,
      duration: getEventMeta.duration,
      hasTime: getEventMeta.hasTime,
      multiDay: getEventMeta.multiDay
    };

    this.handleTitleChange = this.handleTitleChange.bind( this );
    this.handleDescChange = this.handleDescChange.bind( this );
    this.handleDayOption = this.handleDayOption.bind( this );
    this.handleTimeOption = this.handleTimeOption.bind( this );
    this.handleDurationChange = this.handleDurationChange.bind( this );
  }

  handleTitleChange( e ) {
    this.setState( {
      title: e.target.value
    } );
  }

  handleDescChange( e ) {
    this.setState( {
      description: e.target.value
    } );
  }

  handleDurationChange( e ) {
    this.setState( {
      duration: e.target.value
    } );
  }

  handleDayOption( e ) {
    const selected = e.target.value;
    const isSelectedTrue = ( selected === 'true' );

    this.setState( {
      multiDay: isSelectedTrue
    } );
  }

  handleTimeOption( e ) {
    const selected = e.target.value;
    const isSelectedTrue = ( selected === 'true' );

    this.setState( {
      hasTime: isSelectedTrue
    } );
  }

  render() {
    const {
      description, duration, hasTime, multiDay, title
    } = this.state;

    return (
      <Fragment>
        <label htmlFor="_iip_events_title">
          Title:
          <input
            className="wide-input stacked"
            id="_iip_events_title"
            name="_iip_events_title"
            onChange={ this.handleTitleChange }
            type="text"
            value={ title }
          />
        </label>
        <br />
        <label htmlFor="_iip-events-desc">
          Enter a Description for your event:
          <textarea
            className="large-textarea stacked"
            id="_iip_events_desc"
            name="_iip_events_desc"
            onChange={ this.handleDescChange }
            value={ description }
          />
        </label>
        <div className="iip-events-datetime">
          <div className="iip-event-start-date">
            <p>Select the date of your event:</p>
            <DateSelector date={ getEventMeta.date } metavalue="date" />
          </div>
          <div className="iip-event-end-date">
            <p>Multi-day event?</p>
            <RadioToggle callback={ this.handleDayOption } metavalue="end_date" option={ multiDay } />
            { multiDay && (
              <Fragment>
                <br />
                <DateSelector date={ getEventMeta.endDate } metavalue="end_date" />
              </Fragment>
            ) }
          </div>
          <div className="iip-event-time">
            <p>Include a time for your event?:</p>
            <RadioToggle callback={ this.handleTimeOption } metavalue="time" option={ hasTime } />
            { hasTime && (
              <Fragment>
                <p>Start time:</p>
                <TimeSelector />
                <p>Duration (in minutes):</p>
                <input
                  className="stacked"
                  id="_iip_events_duration"
                  name="_iip_events_duration"
                  onChange={ this.handleDurationChange }
                  type="text"
                  value={ duration }
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
