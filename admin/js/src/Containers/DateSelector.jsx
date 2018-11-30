import React, { Component, Fragment } from 'react';
import { bool } from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

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
    const { time } = this.props;

    return (
      <Fragment>
        { time ? (
          <DatePicker
            selected={ startDate }
            onChange={ this.handleChange }
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={ 15 }
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
          />
        ) : (
          <DatePicker
            selected={ startDate }
            onChange={ this.handleChange }
          />
        ) }
      </Fragment>
    );
  }
}

DateSelector.propTypes = {
  time: bool
};

export default DateSelector;
