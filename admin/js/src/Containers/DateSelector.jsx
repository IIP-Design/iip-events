import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { getEventMeta } from '../utils/globals';

class DateSelector extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      date: new Date( getEventMeta.date ) || new Date()
    };

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( date ) {
    this.setState( {
      date
    } );
  }

  render() {
    const { date } = this.state;

    return (
      <DatePicker
        id="_iip_events_date"
        name="_iip_events_date"
        onChange={ this.handleChange }
        selected={ date }
      />
    );
  }
}

export default DateSelector;
