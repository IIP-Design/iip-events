import React from 'react';
import {
  array, bool, func, string, number
} from 'prop-types';

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import {
  getExtention, getFiles, getImageUrl, removeDashes
} from '../utils/uploadHelpers';

const FileUploader = ( {
  ajaxUrl, allowMultiple, callbackAdd, callbackRemove, eventId, files, iipEventNonce, index
} ) => (
  <FilePond
    allowMultiple={ allowMultiple }
    files={ getFiles( files ) }
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
              const fileObj = {
                filename: removeDashes( requestJson.filename ),
                image: getImageUrl( requestJson ),
                type: getExtention( requestJson ),
                url: requestJson.url
              };

              callbackAdd( fileObj, index );
              load( request.responseText );
            } else {
              error( errorMessage );
            }
          } else {
            error( 'Error: Unable to upload provided file.' );
          }
        };
        request.send( formData );
      },
      remove: ( source, load, error ) => {
        callbackRemove( source, index );
        load();
      }
    } }
  />
);

FileUploader.propTypes = {
  ajaxUrl: string,
  allowMultiple: bool,
  callbackAdd: func,
  callbackRemove: func,
  eventId: string,
  files: array,
  iipEventNonce: string,
  index: number
};

FileUploader.defaultProps = {
  callbackAdd: obj => console.log( obj ),
  index: 0
};

export default FileUploader;
