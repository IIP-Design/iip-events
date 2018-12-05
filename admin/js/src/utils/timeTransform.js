// Converts date string in the format 5:00 PM into 24 hour time (17:00)
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

  return `${hours}:${minutes}`;
};

// Concates a 12 hour time string into a contrived datetime string
export const fudgeDate = ( timeString ) => {
  if ( !timeString ) {
    return;
  }

  const time = convertTo24( timeString );
  const dateString = `1970-01-01 ${time}`;
  const date = new Date( dateString );
  return date;
};
