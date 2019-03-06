<?php
/**
 * The template for displaying single event posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<div class="content-wrap post-wrap">

  <?php
  if( have_posts() ):
    while( have_posts() ): the_post(); 
    
    $id = get_the_ID();
    $post_meta = unserialize( get_post_meta( $id, '_iip_event_meta', true ) );
    $timezone_obj = ( $post_meta['timezone'] );
    $timezone_abbrev = $timezone_obj->abbreviation;
    $no_date = $post_meta['noDate'];
    
    $thumbnail = the_post_thumbnail();
    $date = date( 'l, M. j, Y', strtotime( $post_meta['date'] ) );
    $end_date = ( $post_meta['multiDay'] == true ) ? ' - ' . date( 'l, M. j, Y', strtotime( $post_meta['endDate'] ) ) : '';
    $timezone = ( $timezone_abbrev ) ? ' ' . $timezone_abbrev : '';
    $time = ( $post_meta['hasTime'] == true ) ? ' at ' . $post_meta['time'] . ' - ' . $post_meta['endTime'] . $timezone : '';
    $details = ( $post_meta['details'] ) ? $post_meta['details'] : '';
    $description = ( $post_meta['description'] ) ? '<h3>Description:</h3><p>' . $post_meta['description'] . '</p>' : '';
    $speakers = ( $post_meta['speakers'] ) ? $post_meta['speakers'] : '';
    $materials = ( $post_meta['materials'] ) ? $post_meta['materials'] : '';
    $files = ( $post_meta['files'] ) ? ( $post_meta['files'] ) : '';
    $contact_method = ( $post_meta['contactMethod'] ) ? ' at ' . $post_meta['contactMethod'] : '';
    $contact_name = ( $post_meta['contact'] ) ? $post_meta['contact'] : '';
    $contact = ( $contact_name ) ? '<strong>Questions about this event?</strong><strong>Reach out to ' . $contact_name . $contact_method . '</strong>' : '';
    
    $dateline;
    if ( $no_date == 'tba') {
      $dateline = '<p><strong>When:</strong> To Be Announced</p>';
    } elseif ( $no_date == 'none' ) {
      $dateline = '';
    } else {
      $dateline = '<p><strong>When:</strong>' . $date . $end_date . $time . '</p>';
    }
    ?>
  
    <article class="iip-event-article" id="post-<?php the_ID(); ?>">
      <div class="iip-event-hero">
        <figure class="iip-event-featured-image"><?php the_post_thumbnail(); ?></figure>
      </div>

      <h2><?php echo( $post_meta['title'] ); ?></h2>

      <section class="iip-event-meta-container">
        <div class="iip-event-meta">
          <?php
          echo( $dateline );
          if ( $details ):

            foreach ( $details as $detail ) {
              
              $title = $detail->title ? $detail->title : '';
              $name = $detail->name ? $detail->name : '';
              $link = $detail->link ? $detail->link : '';

              $html;
              
              if ( $title && $name && $link ) {
                $html = '<p><strong>' . $title . ': </strong><a href="' . $link . '" target="_blank">' . $name . '</a></p>';
              } elseif ( $title && $name && !$link ) {
                $html = '<p><strong>' . $title . ':</strong> ' . $name . '</p>';
              } elseif ( $title && !$name && $link ) {
                $html = '<p><a href="' . $link . '" target="_blank"><strong>' . $title . '</strong></a></p>';
              } elseif ( !$title && $name && $link ) {
                $html = '<p><a href="' . $link . '">' . $name . '</a></p>';
              } elseif ( $title && !$name && !$link ) {
                $html = '<p><strong>' . $title . '</strong></p>';
              } elseif ( !$title && $name && !$link ) {
                $html = '<p>' . $name . '</p>';
              } elseif ( !$title && !$name && $link ) {
                $html = '<p><a href="' . $link . '" target="_blank">' . $link . '</a></p>';
              } else {
                $html = '';
              };

              echo( $html );
            }
          endif;
          ?>
        </div>

        <?php
        if ( ! $no_date ):

          $html = '<div class="iip-event-add-to-cal" id="iip-events-front"></div>';

          echo( $html );

        endif;
        ?>
      </section>

      <div class="iip-event-body">
        <?php echo( $description ); ?>
      </div>

      <?php
      if ( $speakers ):
        echo( '<section class="iip-event-speakers">' );
        echo( '<h3>Speakers:</h3>' );

        foreach ( $speakers as $speaker ) {
          $image = '';
          if ( $speaker->image ):
            $image = '<div class="iip-event-speaker-img" style="background-image: url(';
            $image .= $speaker->image['0']->image;
            $image .= ')"></div>';
          endif;

          $html = '<div class="iip-event-speaker">';
          $html .= $image;
          $html .= '<div><strong>' . $speaker->name . '</strong><br />';
          $html .= '<strong>' . $speaker->title . '</strong>';
          $html .= '<p>' . $speaker->bio . '</p>';
          $html .= '</div></div>';
          
          echo( $html );
        }

        echo( '</section>' );
      endif;
      ?>

      <?php
      if ( $materials || $files ):
        echo( '<div class="iip-event-materials">' );
        echo( '<h3>Promotional Materials:</h3>' );
        
        if ( $materials ):
          echo( '<section class="iip-event-materials">' );
            foreach ( $materials as $material ) {
              $html = '<a class="iip-events-material-button" href="' . $material->link . 'target="_blank">';
              $html .= $material->label;
              $html .= '</a>';

              echo( $html );
            }
          echo( "</section>" );
        endif;
        
        if ( $files ):
          echo( "<section class='iip-event-files'>" );
          foreach ( $files as $file ) {
            $type = $file->type;
            $background = ( $type == 'jpg' || $type == 'jpeg' || $type == 'png' ) ? 'background-size: cover' : 'background-size: contain';
            $margin = ( $type == 'jpg' || $type == 'jpeg' || $type == 'png' ) ? 'margin-top: 0' : 'margin-top: 5px';

            $html = '<div class="iip-event-file">';
            $html .= '<a class="iip-event-file-link" href="' . $file->url . 'download="' . $file->filename . 'target="_blank">';
            $html .= '<div class="iip-event-file-img" style="background-image: url(' . $file->image . '); ';
            $html .= $background . '; ' . $margin . ';"></div>';
            $html .= '<p class="iip-event-file-label">';
            $html .= '<strong>' . $file->filename . '</strong> (' . $type . ')';
            $html .= '</p></a></div>';

            echo( $html );
          }
          echo( '</section>' );
        endif;

        echo( '</div>' );
      endif;
      ?>

      
      <?php
      if ( $contact ):
        echo( '<div class="iip-event-contact">' );
        echo( $contact );
        echo( '</div>' );
      endif;
      ?>
      
    </article>
    
    <?php
  
    endwhile;
  endif; 
  
  get_sidebar(); ?>

</div> <!-- End wrap -->
<?php

get_footer();