import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { getEventMeta } from '../utils/globals';
import { fudgeDate } from '../utils/timeTransform';

class TimeSelector extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      time: fudgeDate( getEventMeta.time ) || new Date()
    };

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( time ) {
    this.setState( {
      time
    } );
  }

  render() {
    const { time } = this.state;

    return (
      <DatePicker
        dateFormat="h:mm aa"
        id="_iip_events_time"
        name="_iip_events_time"
        onChange={ this.handleChange }
        selected={ time }
        showTimeSelect
        showTimeSelectOnly
        timeCaption="Time"
        timeIntervals={ 15 }
        value={ time }
      />
    );
  }
}

export default TimeSelector;
