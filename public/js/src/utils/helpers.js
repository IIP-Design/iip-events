export const checkForX = ( x ) => {
  if ( x ) {
    return true;
  }
  return false;
};

export const ensureTwoDigits = ( value ) => {
  const twoDigits = ( `0${value}` ).slice( -2 );

  return twoDigits;
};
