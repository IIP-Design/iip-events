import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { eventParams } from '../utils/globals';

class DateSelector extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      startDate: new Date()
    };

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( date ) {
    this.setState( {
      startDate: date
    } );
  }

  render() {
    const { startDate } = this.state;

    return (
      <DatePicker
        id="_iip_events_date"
        name="_iip_events_date"
        onChange={ this.handleChange }
        selected={ startDate }
      />
    );
  }
}

export default DateSelector;
