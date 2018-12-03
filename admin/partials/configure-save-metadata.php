<?php

// Checks save status
$is_revision = wp_is_post_revision( $post_id );
$is_valid_nonce = ( isset( $_POST[ 'event_info_nonce' ] ) && wp_verify_nonce( $_POST[ 'event_info_nonce' ], 'iip_event' ) ) ? 'true' : 'false';

// Exits script depending on save status
if ( $is_revision || !$is_valid_nonce ) {
  return;
}

if ( $is_revision ) {
  return;
}

if( !empty( $_POST['_iip_events_title'] ) ) {
  update_post_meta ( $post_id, '_iip_events_title', sanitize_text_field( $_POST['_iip_events_title'] ) );
}

if( !empty( $_POST['_iip_events_desc'] ) ) {
  update_post_meta ( $post_id, '_iip_events_desc', sanitize_text_field( $_POST['_iip_events_desc'] ) );
}

if( !empty( $_POST['_iip_events_date'] ) ) {
  update_post_meta ( $post_id, '_iip_events_date', sanitize_text_field( $_POST['_iip_events_date'] ) );
}
