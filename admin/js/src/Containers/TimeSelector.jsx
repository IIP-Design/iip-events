import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { eventParams } from '../utils/globals';

class TimeSelector extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      startTime: new Date()
    };

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( time ) {
    console.log(time);

    this.setState( {
      startTime: time
    } );
  }

  render() {
    const { startTime } = this.state;

    return (
      <DatePicker
        dateFormat="h:mm aa"
        id="_iip_events_time"
        name="_iip_events_time"
        onChange={ this.handleChange }
        selected={ startTime }
        showTimeSelect
        showTimeSelectOnly
        timeCaption="Time"
        timeIntervals={ 15 }
        value={ startTime }
      />
    );
  }
}

export default TimeSelector;
