export const convertTo24 = ( timeString ) => {
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

export const fudgeDate = ( timeString ) => {
  const time = convertTo24( timeString );
  const dateString = `1970-01-01 ${time}`;
  const date = new Date( dateString );
  return date;
};
