<?php

namespace IIP_Events;

use WP_REST_Server, WP_REST_Controller;

class API extends WP_REST_Controller {

  public function create_event_endpoint() {
    // Define API URL parameters
    $version = '1';
    $namespace = 'iip-events/v' . $version;
    $base = 'events';

    register_rest_route( $namespace, '/' . $base, array(
      'methods' => WP_REST_Server::READABLE,
      'callback' => array($this, 'get_events'),
    ) );
  }

  public function get_events( $request ) {
    $args = array(
      'post_type' => 'iip_event',
      'post_status' => 'publish',
    );

    $events = get_posts( $args );

    if ( empty( $events ) ) {
      return rest_ensure_response( $data );
    }

    foreach ($events as $event ) {
      $data[] = $this->prepare_response_for_collection( $event );
    }

    return rest_ensure_response($data);
  }

  public function prepare_response_for_collection( $response ) {
    if ( !( $response instanceof WP_REST_Response ) ) {
      return $response;
    }

    $data = (array) $response->get_data();

    return $data;
  }
}