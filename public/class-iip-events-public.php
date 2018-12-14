<?php

namespace IIP_Event;

class Frontend {

  private $plugin_name;
  private $version;

  //Initialize the class and set its properties.
  public function __construct( $plugin_name, $version ) {
    $this->plugin_name = $plugin_name;
    $this->version = $version;
  }
  
  public function enqueue_iip_events_frontend() {
    $cpt = 'iip_event';

    if ( !is_admin() && $cpt == get_post_type() ) {
    
      // Register the stylesheets for the admin area.
      wp_enqueue_style( 'iip-events-css', IIP_EVENTS_URL . 'public/css/iip-events.css', array(), $this->version, 'all' );
    }

  }

  public function include_post_type( $template_path ) {

    if ( get_post_type() == 'iip_event' ) {
      
      if ( is_single() ) {

        if ( $theme_file = locate_template( array( 'single-iip_event.php' ) ) ) {
          $template_path = $theme_file;
        } else {
          $template_path = IIP_EVENTS_DIR . 'public/single-iip_event.php';
        }
      
      }
    }

    return $template_path;
  }
}