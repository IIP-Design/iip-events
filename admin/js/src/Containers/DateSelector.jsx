import React, { Component } from 'react';
import { instanceOf, string } from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class DateSelector extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      date: new Date()
    };

    this.handleChange = this.handleChange.bind( this );
  }

  componentDidMount() {
    const { date } = this.props;
    const setDate = date ? new Date( date ) : new Date();

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
        autoComplete="off"
        id={ `iip_event_${metavalue}` }
        name={ `event_${metavalue}` }
        onChange={ this.handleChange }
        selected={ date }
      />
    );
  }
}

DateSelector.propTypes = {
  date: instanceOf( Date ),
  metavalue: string
};

export default DateSelector;
