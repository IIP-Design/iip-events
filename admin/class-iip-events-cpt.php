<?php

namespace IIP_Event;

class Custom_Post_Type {

  // Post type name.
  public $name = 'iip_event';

  public function create_event_post_type(){
    $labels = array(
      'name'               => _x( 'IIP Events', 'post type general name', 'iip-event' ),
      'singular_name'      => _x( 'IIP Event', 'post type singular name', 'iip-event' ),
      'menu_name'          => _x( 'IIP Event', 'admin menu', 'iip-event' ),
      'name_admin_bar'     => _x( 'IIP Event', 'add new on admin bar', 'iip-event' ),
      'add_new_item'       => __( 'Add New Event', 'iip-event' ),
      'new_item'           => __( 'New Event', 'iip-event' ),
      'edit_item'          => __( 'Edit Event', 'iip-event' ),
      'view_item'          => __( 'View Event', 'iip-event' ),
      'all_items'          => __( 'All Events', 'iip-event' ),
      'search_items'       => __( 'Search Events', 'iip-event' ),
      'not_found'          => __( 'No Events found.', 'iip-event' ),
      'not_found_in_trash' => __( 'No Events found in Trash.', 'iip-event' )
    );

    $args   = array(
      'labels'               => $labels,
      'description'          => __( 'Configure Event', 'iip-event' ),
      'public'               => true,
      'show_ui'              => true,
      'show_in_menu'         => true,
      'show_in_nav_menus'    => true,
      'show_in_admin_bar'    => true,
      'show_in_rest'         => false,
      'query_var'            => false,
      'rewrite'              => array( 'slug' => 'iip_event' ),
      'capability_type'      => 'post',
      'has_archive'          => true,
      'hierarchical'         => false,
      'can_export'           => true,
      'delete_with_user'     => false,
      'menu_position'        => 6,
      'register_meta_box_cb' => array( $this, 'add_metaboxes' ),
      'menu_icon'            => 'dashicons-calendar-alt',
      'supports'             => array( 'excerpt', 'thumbnail', 'title' )
    );

    register_post_type( $this->name, $args );
  }

  // Add custom metaboxes to backend dashboard
  public function add_metaboxes() {
    add_meta_box(
      'iip_events_project_info',
      __( 'Configure Your Event', 'iip-event' ),
      array( $this, 'event_info_metabox' ),
      $this->name,
      'normal',
      'high'
    );
  }

  // Pull in anchor div
  public function event_info_metabox( $post ) {
    wp_nonce_field( 'event_info', 'event_info_nonce' );

    echo '<div id="iip-events-admin"></div>';
  }

  public function save_event_meta( $post_id, $post_object ) {
    // Checks if is event post
    $is_event = ( 'iip_event' == get_post_type( $post_id ) );

    // Checks if save is a revision
    $is_revision = wp_is_post_revision( $post_id );

    // Checks for a valid nonce
    $has_nonce = isset( $_POST[ 'event_info_nonce' ] );
    $verified_nonce = wp_verify_nonce( $_POST[ 'event_info_nonce' ], 'event_info' );
    $is_valid_nonce = ( $has_nonce && $verified_nonce ) ? true : false;
    
    if ( !$is_event || $is_revision || !$is_valid_nonce ) {
      return;
    }
    
    include_once( 'partials/configure-save-metadata.php' );
  }
}