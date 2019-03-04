// eslint-disable-next-line no-undef
const eventDir = iipEventParams.eventDir || '/';

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

export const getImageUrl = ( source ) => {
  let imgUrl;

  switch ( source.type ) {
    case 'image/jpeg':
      imgUrl = source.url;
      break;
    case 'image/jpg':
      imgUrl = source.url;
      break;
    case 'image/png':
      imgUrl = source.url;
      break;
    case 'pdf':
      imgUrl = `${eventDir}/admin/assets/file-pdf.svg`;
      break;
    case 'doc':
      imgUrl = `${eventDir}/admin/assets/file-word.svg`;
      break;
    case 'docx':
      imgUrl = `${eventDir}/admin/assets/file-word.svg`;
      break;
    case 'ppt':
      imgUrl = `${eventDir}/admin/assets/file-powerpoint.svg`;
      break;
    case 'pptx':
      imgUrl = `${eventDir}/admin/assets/file-powerpoint.svg`;
      break;
    case 'xls':
      imgUrl = `${eventDir}/admin/assets/file-excel.svg`;
      break;
    case 'xlsm':
      imgUrl = `${eventDir}/admin/assets/file-excel.svg`;
      break;
    default:
      imgUrl = `${eventDir}/admin/assets/file-regular.svg`;
  }

  return imgUrl;
};

export const removeDashes = ( string ) => {
  const noDash = string.replace( /[_-]/g, ' ' );
  return noDash;
};
