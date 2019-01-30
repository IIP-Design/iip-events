import moment from 'moment';
import 'moment-timezone';

import { ensureTwoDigits } from './helpers';

// Converts time string in the format 5:00 PM into 24 hour time (17:00)
export const convertTo24 = ( timeString ) => {
  if ( !timeString ) {
    return;
  }

  const [time, modifier] = timeString.split( ' ' );

  let [hours, minutes] = time.split( ':' ); // eslint-disable-line prefer-const

  if ( hours === '12' ) {
    hours = '00';
  }

  if ( modifier === 'PM' ) {
    hours = parseInt( hours, 10 ) + 12;
  }

  const noralizedHours = ensureTwoDigits( hours );

  return `${noralizedHours}:${minutes}`;
};

// Convert date in 'March 1, 2019' format to '2019-03-01' format
export const getISODate = ( date ) => {
  const tempDateStr = new Date( date );
  const day = ensureTwoDigits( tempDateStr.getDate() );
  const month = ensureTwoDigits( tempDateStr.getMonth() + 1 );
  const year = tempDateStr.getFullYear();

  const isoDate = `${year}-${month}-${day}`;

  return isoDate;
};

// Convert time in '3:30 PM' format to '15:30:00' format
export const getISOTime = ( time ) => {
  const twentyFourHrs = convertTo24( time );

  const isoTime = `${twentyFourHrs}:00`;

  return isoTime;
};

// Convert time/date inputs into datetime string with timezone offsets
export const normalizeDatetime = ( date, time, timezone ) => {
  const dateString = getISODate( date );
  const timeString = getISOTime( time );
  const datetime = `${dateString}T${timeString}`;

  const normalizedDate = moment.tz( datetime, timezone ).format();

  return normalizedDate;
};
