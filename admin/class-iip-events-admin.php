<?php

namespace IIP_Events;

class Admin {

  private $plugin_name;
  private $version;

  //Initialize the class and set its properties.
  public function __construct( $plugin_name, $version ) {
    $this->plugin_name = $plugin_name;
    $this->version = $version;
  }

  public function enqueue_iip_events_admin( $hook_suffix ) {
    $cpt = 'iip_event';

    if( in_array( $hook_suffix, array( 'post.php', 'post-new.php' ) ) ) {
      $screen = get_current_screen();

      if( is_object( $screen ) && $cpt == $screen->post_type ) {

        // Enqueue admin JavaScript bundle
        wp_enqueue_script( 'iip-events-admin-js', IIP_EVENTS_URL . 'admin/js/dist/iip-events-admin.min.js', array(), null, true );
      }
    }
  }

  public function localize_event_variables() {
    global $post;

    // Pass PHP variable to admin JS
    wp_localize_script( 'iip-events-admin-js', 'iipEventParams', array(
      'eventTitle' => get_post_Meta( $post->ID, '_iip-events-title', true ),
      'eventDesc' => get_post_Meta( $post->ID, '_iip-events-desc', true ),
      'eventTime' => get_post_Meta( $post->ID, '_iip-events-time', true )
    ) );
  }
}