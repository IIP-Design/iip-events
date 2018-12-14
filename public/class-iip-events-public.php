<?php

namespace IIP_Event;

class Frontend {

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