import React, { Component } from 'react';

import DateSelector from './DateSelector';
import { eventParams } from '../utils/globals';

class ConfigureForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      title: eventParams.eventTitle || '',
      description: eventParams.eventDesc || '',
      includeTime: false
    };

    this.handleTitleChange = this.handleTitleChange.bind( this );
    this.handleDescChange = this.handleDescChange.bind( this );
    this.handleTimeOption = this.handleTimeOption.bind( this );
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

  handleTimeOption( e ) {
    const selected = e.target.value;
    const isSelectedTrue = ( selected === 'true' );

    this.setState( {
      includeTime: isSelectedTrue
    } );
  }

  render() {
    const { description, includeTime, title } = this.state;

    return (
      <form name="iip_events_form">
        <label htmlFor="_iip_events_title">
          Title:
          <input
            className="stacked"
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
            className="stacked"
            id="_iip_events_desc"
            name="_iip_events_desc"
            onChange={ this.handleDescChange }
            value={ description }
          />
        </label>
        <br />
        <p>Include a time for your event?:</p>
        <label className="iip-events-radio" htmlFor="_iip_events_time_yes">
          Yes
          <input
            checked={ includeTime }
            className="iip-events-radio"
            id="_iip_events_time_yes"
            name="_iip_events_time_yes"
            onChange={ this.handleTimeOption }
            type="radio"
            value
          />
        </label>
        <label className="iip-events-radio" htmlFor="_iip_events_time_no">
          No
          <input
            checked={ !includeTime }
            className="iip-events-radio"
            id="_iip_events_time_no"
            name="_iip_events_time_no"
            onChange={ this.handleTimeOption }
            type="radio"
            value={ false }
          />
        </label>
        <p>Select the Date of your event:</p>
        <DateSelector time={ includeTime } />
      </form>
    );
  }
}

export default ConfigureForm;
