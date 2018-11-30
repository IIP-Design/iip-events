import React from 'react';

import ConfigureForm from './Containers/ConfigureForm';

const App = () => (
  <div className="App">
    <div className="iip-events-admin-metabox-holder metabox-holder columns-2">
      <div className="iip-events-admin-column-wide postbox-container">
        <div className="postbox">
          <ConfigureForm />
        </div>
      </div>
    </div>
  </div>
);

export default App;
