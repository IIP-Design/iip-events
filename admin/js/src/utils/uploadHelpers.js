// eslint-disable-next-line no-undef
const eventDir = iipEventParams.eventDir || '';

// For images gets the file extention from 'image/type' notation
export const getExtention = ( source ) => {
  let extention;

  switch ( source.type ) {
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
      extention = source.type;
  }

  return extention;
};

// Sets the image URL for a file based off of file extention
// Images set to themselves, all else set to appropriate placeholder file
export const getImageUrl = ( source ) => {
  let imgUrl;

  switch ( source.type ) {
    case 'image/jpeg':
    case 'image/jpg':
    case 'image/png':
      imgUrl = source.url;
      break;
    case 'pdf':
      imgUrl = `${eventDir}admin/assets/file-pdf.svg`;
      break;
    case 'doc':
    case 'docx':
      imgUrl = `${eventDir}admin/assets/file-word.svg`;
      break;
    case 'ppt':
    case 'pptx':
      imgUrl = `${eventDir}admin/assets/file-powerpoint.svg`;
      break;
    case 'xls':
    case 'xlsm':
      imgUrl = `${eventDir}admin/assets/file-excel.svg`;
      break;
    default:
      imgUrl = `${eventDir}admin/assets/file-regular.svg`;
  }

  return imgUrl;
};

// Removes dashed and underscores from a string
export const removeDashes = ( string ) => {
  const noDash = string.replace( /[_-]/g, ' ' );
  return noDash;
};

// Populates a properly formatted file list object
export const getFiles = ( files ) => {
  const fileList = [];

  if ( files ) {
    files.map( ( file ) => {
      const fileObj = { source: file.url, options: { type: 'local' } };
      fileList.push( fileObj );
      return fileList;
    } );
  }

  return fileList;
};
