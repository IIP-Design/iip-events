<?php

// Checks save status
$is_revision = wp_is_post_revision( $post_id );
$is_valid_nonce = ( isset( $_POST[ 'event_info_nonce' ] ) && wp_verify_nonce( $_POST[ 'event_info_nonce' ], 'iip_event' ) ) ? 'true' : 'false';

// Exits script depending on save status
if ( $is_revision || !$is_valid_nonce ) {
  return;
}

$event_meta = unserialize( get_post_meta( $post_id, '_iip_events_meta' ) );

if( !empty( $_POST['_iip_events_title'] ) ) {
  $event_meta['title'] = ( sanitize_text_field( $_POST['_iip_events_title'] ) );
}

if( !empty( $_POST['_iip_events_desc'] ) ) {
  $event_meta['description'] = ( sanitize_text_field( $_POST['_iip_events_desc'] ) );
}

if( !empty( $_POST['_iip_events_date'] ) ) {
  
  $date_string = strtotime( sanitize_text_field( $_POST['_iip_events_date'] ) );
  $date = date( 'D M d Y H:i:s', $date_string );

  $event_meta['date'] = $date;
}

$event_meta['hasTime'] = ( ( isset( $_POST['_iip_events_time_yes'] ) ) ? true : false );

if( !empty( $_POST['_iip_events_time'] ) ) {
  $event_meta['time'] = ( sanitize_text_field( $_POST['_iip_events_time'] ) );
}

update_post_meta ( $post_id, '_iip_events_meta', $event_meta );