<?php

/**
* Plugin Name: IIP Events
* Plugin URI: https://github.com/IIP-Design/iip-events
* Description: Event custom post type for IIP
* Version: v1.1.2
* Author: Marek Rewers, U.S. Department of State, IIP Office of Design <designdevops@america.gov>
* Text Domain: iip-event
* License: GNU General Public License v2.0
* License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
*/

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
 	die;
}

// Define constants
define( 'IIP_EVENTS_DIR', plugin_dir_path( dirname( __FILE__ ) ) . 'iip-events/' );
define( 'IIP_EVENTS_URL', plugin_dir_url( dirname( __FILE__ ) ) . 'iip-events/' );
define( 'IIP_EVENTS_ADMIN', plugin_dir_url( dirname( __FILE__ ) ) . 'iip-events/admin/js/dist/' );
define( 'IIP_EVENTS_PUBLIC', plugin_dir_url( dirname( __FILE__ ) ) . 'iip-events/public/js/dist/' );

// Imports IIP_Events class
require plugin_dir_path( __FILE__ ) . 'includes/class-iip-events.php';

/* Begin execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 */

function run_iip_events() {
  $plugin = new IIP_Events();
  $plugin->run();
}
run_iip_events();