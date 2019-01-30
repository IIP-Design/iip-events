export const getData = ( input ) => {
  const data = JSON.stringify( input );

  return data;
};

export const getTimezones = ( input ) => {
  const { timezones } = input;

  return timezones;
};
