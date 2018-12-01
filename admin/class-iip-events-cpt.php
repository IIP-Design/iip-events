<?php

namespace IIP_Events;

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
      'public'               => false,
      'publicly_queryable'   => false,
      'show_ui'              => true,
      'show_in_menu'         => true,
      'show_in_nav_menus'    => true,
      'show_in_admin_bar'    => true,
      'show_in_rest'         => false,
      'exclude_from_search'  => true,
      'query_var'            => false,
      'rewrite'              => array( 'slug' => 'iip_event' ),
      'capability_type'      => 'post',
      'has_archive'          => false,
      'hierarchical'         => false,
      'can_export'           => true,
      'delete_with_user'     => false,
      'menu_position'        => 6,
      'register_meta_box_cb' => array( $this, 'add_metaboxes' ),
      'menu_icon'            => 'dashicons-calendar-alt',
      'supports'             => 'title'
    );

    register_post_type( $this->name, $args );
  }

  // Add custom metaboxes to backend dashboard
  public function add_metaboxes() {
    add_meta_box(
      'iip_events_project_info',
      __( 'Configure Your Event', 'iip-events' ),
      array( $this, 'event_info_metabox' ),
      $this->name,
      'normal',
      'high'
    );
  }

  // Pull in anchor div
  public function event_info_metabox( $post ) {
    echo '<div id="iip-events-admin"></div>';
  }
}