const path = require( 'path' );
const fs = require( 'fs' );

const appDirectory = fs.realpathSync( process.cwd() );
const resolveApp = relativePath => path.resolve( appDirectory, relativePath );

module.exports = {
  dotenv: resolveApp( '.env' ),
  appDist: resolveApp( 'dist' ),
  appPublic: resolveApp( 'static' ),
  appHtml: resolveApp( 'static/index.html' ),
  appIndexJs: resolveApp( 'src/index.js' ),
  appPackageJson: resolveApp( 'package.json' ),
  appSrc: resolveApp( 'src' )
};
