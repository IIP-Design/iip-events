<?php

namespace IIP_Events;

class Admin {

  public function enqueue_iip_events_admin( $hook_suffix ) {
    $cpt = 'iip_event';

    if( in_array( $hook_suffix, array( 'post.php', 'post-new.php' ) ) ) {
      $screen = get_current_screen();

      if( is_object( $screen ) && $cpt == $screen->$post_type ) {

        // Enqueue admin JavaScript bundle
        wp_enqueue_script( 'iip-events-admin-js', IIP_EVENTS_URL . 'admin/js/dist/iip-events-admin.min.js', array(), null, true );
      }
    }
  }
}