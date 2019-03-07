const path = require( 'path' );
const fs = require( 'fs' );

const appDirectory = fs.realpathSync( process.cwd() );
const resolveApp = relativePath => path.resolve( appDirectory, relativePath );

// Path to fonts hardcoded relative to root URL
// May need to be changed if file-structure of site different
const fonts = '/wp-content/plugins/iip-events/public/js/dist/fonts';

module.exports = {
  dotenv: resolveApp( '.env' ),
  appDist: resolveApp( 'dist' ),
  appPublic: resolveApp( 'public' ),
  appHtml: resolveApp( 'public/index.html' ),
  appIndexJs: resolveApp( 'src/index.js' ),
  appPackageJson: resolveApp( 'package.json' ),
  appSrc: resolveApp( 'src' ),
  fontPath: fonts
};
