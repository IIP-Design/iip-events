import React from 'react';
import { array, func, string } from 'prop-types';

import { FilePond } from 'react-filepond';

import 'filepond/dist/filepond.min.css';

const getFiles = ( files ) => {
  const fileList = [];

  files.map( ( file ) => {
    const fileObj = { source: file.url, options: { type: 'local' } };
    fileList.push( fileObj );
    return fileList;
  } );

  return fileList;
};

const FileUploader = ( {
  ajaxUrl, callback, eventId, files, iipEventNonce
} ) => (
  <FilePond
    allowMultiple
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
              let extention;
              switch ( requestJson.type ) {
                case 'image/png':
                  extention = 'png';
                  break;
                case 'image/jpg':
                  extention = 'jpg';
                  break;
                case 'image/jpeg':
                  extention = 'jpeg';
                  break;
                case 'image/gif':
                  extention = 'gif';
                  break;
                default:
                  extention = requestJson.type;
              }

              let imgUrl;
              switch ( requestJson.type ) {
                case 'pdf':
                  imgUrl = 'pdfurl';
                  break;
                case 'doc':
                  imgUrl = 'wordurl';
                  break;
                case 'ppt':
                  imgUrl = 'ppturl';
                  break;
                default:
                  imgUrl = requestJson.url;
              }

              const fileObj = {
                filename: requestJson.filename,
                image: imgUrl,
                type: extention,
                url: requestJson.url
              };

              callback( fileObj );
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
  callback: func,
  eventId: string,
  files: array,
  iipEventNonce: string
};

FileUploader.defaultProps = {
  callback: obj => console.log( obj )
};

export default FileUploader;
