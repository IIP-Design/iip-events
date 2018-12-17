import React, { Component } from 'react';
import { string, instanceOf } from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { fudgeDate, stringifyTime } from '../utils/timeTransform';

class TimeSelector extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      time: new Date()
    };

    this.handleChange = this.handleChange.bind( this );
  }

  componentDidMount() {
    const { time } = this.props;
    const setTime = ( time && typeof time === 'string' ) ? fudgeDate( time ) : new Date();

    this.setState( {
      time: setTime
    } );
  }

  handleChange( time ) {
    this.setState( {
      time
    } );
  }

  render() {
    const { time } = this.state;
    const { metavalue } = this.props;

    return (
      <DatePicker
        autoComplete="off"
        dateFormat="h:mm aa"
        id={ `iip_event_${metavalue}` }
        name={ `event_${metavalue}` }
        onChange={ this.handleChange }
        selected={ time }
        showTimeSelect
        showTimeSelectOnly
        timeCaption="Time"
        timeIntervals={ 15 }
        value={ stringifyTime( time ) }
      />
    );
  }
}

TimeSelector.propTypes = {
  time: string || instanceOf( Date ),
  metavalue: string
};

export default TimeSelector;
