<?php

namespace IIP_Event;

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

        // Register the stylesheets for the admin area.
        wp_enqueue_style( 'iip-events-admin-css', IIP_EVENTS_ADMIN . 'css/iip-events-admin.min.css', array(), $this->version, 'all' );
        
        // Enqueue admin JavaScript bundle
        wp_enqueue_script( 'iip-events-admin-js', IIP_EVENTS_ADMIN . 'js/iip-events-admin.min.js', array(), null, true );
      }
    }
  }

  public function localize_admin_event_variables() {
    global $post;

    if ( $post->post_type != 'iip_event' ) {
      return;
    };

    // Pass PHP variable to admin JS
    wp_localize_script( 'iip-events-admin-js', 'iipEventParams', array(
      'eventMeta' => unserialize( get_post_meta( $post->ID, '_iip_event_meta', true ) )
    ) );
  }
}