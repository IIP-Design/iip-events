<?php

$files = isset( $_FILES ) ? $_FILES : '';
$posted_data = isset( $_POST ) ? $_POST : '';
$post_id = $posted_data['eventId'] ? $posted_data['eventId'] : 0;

if ( $files ):

  foreach ( $files as $file ) {

    $attachment_id = media_handle_upload( 'filepond', $post_id );
    $response = array();

		if ( is_wp_error( $attachment_id ) ) { 
      $response['response'] = "ERROR";
      $response['status'] = 0;
			$response['error'] = "Unable to upload provided file.";
		} else {
      $path = get_attached_file( $attachment_id );
      $pathinfo = pathinfo( $path );
      $url = wp_get_attachment_url( $attachment_id );
      $type = $pathinfo['extension'];
			if ( $type == 'jpeg' || $type == 'jpg' || $type == 'png' || $type == 'gif' ) {
				$type = 'image/' . $type;
			}

      $response['response'] = "SUCCESS";
      $response['status'] = 1;
			$response['filename'] = $pathinfo['filename'];
			$response['url'] = $url;
      $response['type'] = $type;
    }

    echo json_encode( $response );
  }

endif;

wp_die();