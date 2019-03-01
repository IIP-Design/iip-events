import React from 'react';
import { string } from 'prop-types';

import { FilePond } from 'react-filepond';

import 'filepond/dist/filepond.min.css';

const FileUploader = ( { ajaxUrl, eventId, iipEventNonce } ) => (
  <FilePond
    allowMultiple
    server={ {
      process: ( fieldName, file, metadata, load, error, progress, abort ) => {
        const formData = new FormData();
        formData.append( fieldName, file, file.name );
        formData.append( 'action', 'iip_event_files' );
        formData.append( 'eventId', eventId );
        formData.append( 'security', iipEventNonce );

        const request = new XMLHttpRequest();
        request.open( 'POST', ajaxUrl );

        request.upload.onprogress = ( e ) => {
          progress( e.lengthComputable, e.loaded, e.total );
        };

        request.onload = () => {
          if ( request.status >= 200 && request.status < 300 ) {
            const requestJson = JSON.parse( request.responseText );
            const { status } = requestJson;
            const errorMessage = requestJson.error || 'Error: Unable to upload provided file.';

            if ( status === 1 ) {
              load( request.responseText );
            } else {
              error( errorMessage );
            }
          } else {
            error( 'Error: Unable to upload provided file.' );
          }
        };
        request.send( formData );
      }
    } }
  />
);

FileUploader.propTypes = {
  ajaxUrl: string,
  eventId: string,
  iipEventNonce: string
};

export default FileUploader;
