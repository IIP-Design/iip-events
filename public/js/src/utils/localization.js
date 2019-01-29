import moment from 'moment';

require( 'moment/locale/ar.js' );
require( 'moment/locale/es.js' );
require( 'moment/locale/fa.js' );
require( 'moment/locale/fr.js' );
require( 'moment/locale/id.js' );
require( 'moment/locale/ko.js' );
require( 'moment/locale/ja.js' );
require( 'moment/locale/pt-br.js' );
require( 'moment/locale/ru.js' );
require( 'moment/locale/ur.js' );
require( 'moment/locale/vi.js' );
require( 'moment/locale/zh-cn.js' );

export function setDateLocale( locale ) {
  moment.locale( locale );
}
