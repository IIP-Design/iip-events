import React, { Component } from 'react';
import { string } from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class DateSelector extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      date: null
    };

    this.handleChange = this.handleChange.bind( this );
  }

  componentDidMount() {
    const { date } = this.props;
    const setDate = new Date( date ) || new Date();

    this.setState( {
      date: setDate
    } );
  }

  handleChange( date ) {
    this.setState( {
      date
    } );
  }

  render() {
    const { date } = this.state;
    const { metavalue } = this.props;

    return (
      <DatePicker
        id={ `_iip_events_${metavalue}` }
        name={ `_iip_events_${metavalue}` }
        onChange={ this.handleChange }
        selected={ date }
      />
    );
  }
}

DateSelector.propTypes = {
  date: string,
  metavalue: string
};

export default DateSelector;
