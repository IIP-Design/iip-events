<?php

namespace IIP_Events;

class Admin {

  // INSERT YOUR FRONTEND FUNCTIONS HERE
  // THE BELOW INCLUDED FUNCTIONS ADD AN ADMIN METABOX AND ENQUEQUE ADMIN SCRIPTS
  // FEEL FREE TO DELETE IF NOT NEEDED

  public function enqueue_iip_events_admin() {
    wp_enqueue_script( 'iip-events-admin-js', IIP_EVENTS_URL . 'admin/js/dist/iip-events-admin.min.js', array(), null, true );
  }

  public function add_metabox() {
    $post_type = array( 'post', 'page' );
    add_meta_box(
      'iip-events-metabox',
      __( 'IIP Events Metabox', 'iip-events' ),
      array( $this, 'render_metabox' ),
      $post_type,
      'normal',
      'low'
    );
  }

  public function render_metabox() {
    echo '<div id="iip-events-admin"></div>';
  }
}