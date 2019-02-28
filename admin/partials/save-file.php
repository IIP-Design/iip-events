<?php

$fileErrors = array(
  0 => 'File successfully uploaded',
  1 => 'File exceeds the upload_max_files in server settings',
  2 => 'File exceeds the MAX_FILE_SIZE from html form',
  3 => 'File uploaded only partially',
  4 => 'No file was uploaded',
  6 => 'Missing a temporary folder',
  7 => 'Failed to write file to disk',
  8 => 'A PHP extension prevent file upload'
);
  
$posted_data =  isset( $_POST ) ? $_POST : array();
$files = isset( $_FILES ) ? $_FILES : '';

if ( $files ):

  foreach ( $files as $file ) {

    $upload_overrides = array( 'test_form' => false );

    $uploaded = wp_handle_upload( $file, $upload_overrides );
    
    $response = array();

    if( $uploaded && ! isset( $uploaded['error'] ) ) {
      $response['response'] = "SUCCESS";
      $response['filename'] = basename( $uploaded['url'] );
      $response['url'] = $uploaded['url'];
      $response['type'] = $uploaded['type'];
    } else {
      $response['response'] = "ERROR";
      $response['error'] = $uploaded['error'];
    }
    
    error_log(print_r( $uploaded, TRUE ));
  }

endif;

wp_die();