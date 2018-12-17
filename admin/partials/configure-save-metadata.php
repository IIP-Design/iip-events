<?php

// Checks save status
$is_revision = wp_is_post_revision( $post_id );
$is_valid_nonce = ( isset( $_POST[ 'event_info_nonce' ] ) && wp_verify_nonce( $_POST[ 'event_info_nonce' ], 'iip_event' ) ) ? 'true' : 'false';

// Exits script depending on save status
if ( $is_revision || !$is_valid_nonce ) {
  return;
}

// Get serialized array of post meta values
$event_meta = unserialize( get_post_meta( $post_id, '_iip_event_meta' ) );

if( !empty( $_POST['eventTitle'] ) ) {
  $event_meta['title'] = ( sanitize_text_field( $_POST['eventTitle'] ) );
}

if( !empty( $_POST['eventDesc'] ) ) {
  $event_meta['description'] = ( sanitize_text_field( $_POST['eventDesc'] ) );
}

if( !empty( $_POST['event_date'] ) ) {
  
  $date_string = strtotime( sanitize_text_field( $_POST['event_date'] ) );
  $date = date( 'D M d Y H:i:s', $date_string );

  $event_meta['date'] = $date;
}

$event_meta['multiDay'] = ( ( isset( $_POST['multiDay_yes'] ) ) ? true : false );

if( !empty( $_POST['event_endDate'] ) ) {
  
  $date_string = strtotime( sanitize_text_field( $_POST['event_endDate'] ) );
  $date = date( 'D M d Y H:i:s', $date_string );

  $event_meta['endDate'] = $date;
}

$event_meta['hasTime'] = ( ( isset( $_POST['hasTime_yes'] ) ) ? true : false );

if( !empty( $_POST['eventTime'] ) ) {
  $event_meta['time'] = ( sanitize_text_field( $_POST['eventTime'] ) );
}

if( !empty( $_POST['eventDur'] ) ) {
  $event_meta['duration'] = ( sanitize_text_field( $_POST['eventDur'] ) );
}

if( !empty( $_POST['eventOrg'] ) ) {
  $event_meta['organizer'] = ( sanitize_text_field( $_POST['eventOrg'] ) );
}

if( !empty( $_POST['eventLang'] ) ) {
  $event_meta['language'] = ( sanitize_text_field( $_POST['eventLang'] ) );
}

if( !empty( $_POST['eventLink'] ) ) {
  $event_meta['link'] = ( sanitize_text_field( $_POST['eventLink'] ) );
}

if( !empty( $_POST['eventContact'] ) ) {
  $event_meta['contact'] = ( sanitize_text_field( $_POST['eventContact'] ) );
}

if( !empty( $_POST['eventContactMethod'] ) ) {
  $event_meta['contactMethod'] = ( sanitize_text_field( $_POST['eventContactMethod'] ) );
}

if( has_post_thumbnail() ) {
  $event_meta['thumbnail'] = ( get_the_post_thumbnail_url() );
}

// Send updated array of post meta values
update_post_meta ( $post_id, '_iip_event_meta', $event_meta );