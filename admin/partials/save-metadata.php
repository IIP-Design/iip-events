<?php
// Get serialized array of post meta values
$event_meta = unserialize( get_post_meta( $post_id, '_iip_event_meta', true ) );

if( !empty( $_POST['eventTitle'] ) ) {
  $event_meta['title'] = stripslashes( sanitize_text_field( $_POST['eventTitle'] ) );
}

if( !empty( $_POST['eventDesc'] ) ) {
  $event_meta['description'] = stripslashes( sanitize_textarea_field( $_POST['eventDesc'] ) );
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

if( !empty( $_POST['event_time'] ) ) {
  $event_meta['time'] = ( sanitize_text_field( $_POST['event_time'] ) );
}

if( !empty( $_POST['event_endTime'] ) ) {
  $event_meta['endTime'] = ( sanitize_text_field( $_POST['event_endTime'] ) );
}

if( !empty( $_POST['eventTimezone'] ) ) {
  $event_meta['timezone'] = ( json_decode( stripslashes ( sanitize_text_field( $_POST['eventTimezone'] ) ) ) );
}

if( !empty( $_POST['detailsArr'] ) ) {
  $event_meta['details'] = ( json_decode( stripslashes ( sanitize_text_field( $_POST['detailsArr'] ) ) ) );
}

if( !empty( $_POST['speakersArr'] ) ) {
  $event_meta['speakers'] = ( json_decode( stripslashes ( sanitize_text_field( $_POST['speakersArr'] ) ) ) );
}

if( !empty( $_POST['filesArr'] ) ) {
  $event_meta['files'] = ( json_decode( stripslashes ( sanitize_text_field( $_POST['filesArr'] ) ) ) );
}

if( !empty( $_POST['materialsArr'] ) ) {
  $event_meta['materials'] = ( json_decode( stripslashes ( sanitize_text_field( $_POST['materialsArr'] ) ) ) );
}

if( !empty( $_POST['eventContact'] ) ) {
  $event_meta['contact'] = stripslashes( sanitize_text_field( $_POST['eventContact'] ) );
}

if( !empty( $_POST['noDate'] ) ) {
  $event_meta['noDate'] = ( sanitize_text_field( $_POST['noDate'] ) );
} else {
  $event_meta['noDate'] = '';
}

if( !empty( $_POST['eventContactMethod'] ) ) {
  $event_meta['contactMethod'] = stripslashes( sanitize_text_field( $_POST['eventContactMethod'] ) );
}

if( has_post_thumbnail() ) {
  $event_meta['thumbnail'] = ( get_the_post_thumbnail_url() );
} else {
  $placeholder = IIP_EVENTS_URL . 'admin/assets/calendar.png';

  $event_meta['thumbnail'] = $placeholder;
}

// Send updated array of post meta values
update_post_meta ( $post_id, '_iip_event_meta', serialize( $event_meta ) );