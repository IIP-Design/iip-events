import moment from 'moment';

import { setDateLocale } from './localization';
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
  const timeStart = data.hasTime ? data.time : '00:00';

  const obj = {
    allDay: !( data.hasTime ),
    dateStart,
    dateEnd: data.multiDay ? dateEnd : dateStart,
    description: data.description || '',
    language: data.language || '',
    link: data.link || '',
    organizer: data.organizer || '',
    timeStart,
    timeEnd: data.endTime ? data.endTime : timeStart,
    timezone: data.timezone || 'US/Eastern',
    title: data.title || '',
    thumbnail: data.thumbnail
  };

  return { ...obj };
};

// Pull out information required by Add to Calendar from data object
export const normalizeAddToCal = ( data ) => {
  const {
    allDay, dateStart, dateEnd, timeStart, timeEnd, timezone
  } = data;

  const startTime = allDay ? dateStart : normalizeDatetime( dateStart, timeStart, timezone );
  const endTime = allDay ? dateEnd : normalizeDatetime( dateEnd, timeEnd, timezone );

  const obj = {
    title: data.title,
    description: data.description,
    location: data.location || '',
    startTime,
    endTime
  };

  return { ...obj };
};
