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
    
    $date = date( 'l, M. j, Y', strtotime( $post_meta['date'] ) );
    $end_date = ( $post_meta['multiDay'] == true ) ? ' - ' . date( 'l, M. j, Y', strtotime( $post_meta['endDate'] ) ) : '';
    $timezone = ( $post_meta['timezone'] ) ? ' ' . $post_meta['timezone'] : '';
    $time = ( $post_meta['hasTime'] == true ) ? ' at ' . $post_meta['time'] . ' - ' . $post_meta['endTime'] . $timezone : '';
    $language = ( $post_meta['language'] ) ? '<p><strong>Language:</strong> ' . $post_meta['language'] . '</p>' : '';
    $organizer = ( $post_meta['organizer'] ) ? '<p><strong>Organizer:</strong> ' . $post_meta['organizer'] . '</p>' : '';
    $link = ( $post_meta['link'] ) ? '<p><strong>Link:</strong> <a href="' . $post_meta['link'] . '">' . $post_meta['link'] . '</a></p>' : '';
    $description = ( $post_meta['description'] ) ? '<h3>Description:</h3><p>' . $post_meta['description'] . '</p>' : '';
    $speakers = ( $post_meta['speakers'] ) ? $post_meta['speakers'] : '';
    $materials_link = ( $post_meta['materialsLink'] ) ? '<a class="ui button" href="' . $post_meta['materialsLink'] . '" target="_blank">See all materials on Box ></a>' : '';
    $materials = ( $materials_link ) ? '<h3>Promotional Materials:</h3><p>' . $materials_link . '</p>' : '';
    $contact_method = ( $post_meta['contactMethod'] ) ? ' at ' . $post_meta['contactMethod'] : '';
    $contact_name = ( $post_meta['contact'] ) ? $post_meta['contact'] : '';
    $contact = ( $contact_name ) ? '<strong>Questions about this event?</strong><strong>Reach out to ' . $contact_name . $contact_method . '</strong>' : '';
    ?>
  
    <article class="iip-event-article" id="post-<?php the_ID(); ?>">
      <h2>
        <?php echo( $post_meta['title'] ); ?>
      </h2>
      <div class="iip-event-hero">
        <figure class="iip-event-featured-image"><?php the_post_thumbnail(); ?></figure>
      </div>
      <div class="iip-event-meta">
        <p><strong>When:</strong> <?php echo( $date . $end_date . $time ) ?></p>
        <?php 
        echo( $language );
        echo( $organizer ); 
        echo( $link ); 
        ?>
      </div>
      <div class="iip-event-add-to-cal">
        <div id="iip-events-front"></div>
      </div>
      <div class="iip-event-body">
        <?php echo( $description ); ?>
      </div>
      <div class="iip-event-speakers">
        <?php
        if ( $speakers ):
          echo( "<h3>Speakers:</h3>" );

          foreach ( $speakers as $speaker ) {
            $html = "<strong>" . $speaker->name . "</strong><br />";
            $html .= "<strong>" . $speaker->title . "</strong>";
            $html .= "<p>" . $speaker->bio . "</p>";
            
            echo( $html );
          }
        endif;
        ?>
      </div>
      <div class="iip-event-materials">
        <?php echo( $materials ); ?>
      </div>
      <div class="iip-event-contact">
        <?php echo( $contact ); ?>
      </div>
    </article>
    
    <?php
  
    endwhile;
  endif; 
  
  get_sidebar(); ?>

</div> <!-- End wrap -->
<?php

get_footer();