import moment from 'moment';

import { setDateLocale } from './localization';
import { checkForX } from './helpers';
import { normalizeDatetime } from './timeTransform';

const getDate = ( lang, date ) => {
  setDateLocale( lang );
  const localizedDate = moment( date ).format( 'LL' );

  return localizedDate;
};

// Converts inputs from API into useable data object
export const normalizeItem = ( data ) => {
  const dateStart = getDate( 'en-us', data.date );
  const dateEnd = getDate( 'en-us', data.endDate );

  const obj = {
    dateStart,
    dateEnd: checkForX( data.multiDay ) ? dateEnd : dateStart,
    description: data.description,
    language: data.language,
    link: data.link,
    organizer: data.organizer,
    timeStart: checkForX( data.hasTime ) ? data.time : '',
    timeEnd: data.endTime ? data.endTime : data.time,
    timezone: data.timezone || 'US/Eastern',
    title: data.title,
    thumbnail: data.thumbnail
  };

  return { ...obj };
};

// Pull out information required by Add to Calendar from data object
export const normalizeAddToCal = ( data ) => {
  const {
    dateStart, dateEnd, timeStart, timeEnd, timezone
  } = data;

  const startTime = normalizeDatetime( dateStart, timeStart, timezone );
  const endTime = normalizeDatetime( dateEnd, timeEnd, timezone );

  const obj = {
    title: data.title,
    description: data.description,
    location: data.location || '',
    startTime,
    endTime
  };

  return { ...obj };
};
