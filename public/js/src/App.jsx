import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

import { normalizeAddToCal, normalizeItem } from './utils/parser';

const App = () => (
  <AddToCalendar
    buttonTemplate={ { 'calendar-plus-o': 'left' } }
    event={ normalizeAddToCal( normalizeItem ( window.iipEventParams.eventMeta ) ) }
    listItems = { [ { apple: 'Apple Calendar' }, { google: 'Google' }, { outlook: 'Outlook' } ] }
  />
);

export default App;
