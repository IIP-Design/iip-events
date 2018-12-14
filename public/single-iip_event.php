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
    $meta_array = get_post_meta( $id, '_iip_event_meta' );
    $post_meta = $meta_array[0];
    
    $date = date( 'l, M j, Y', strtotime( $post_meta['date'] ) );
    $time = ( $post_meta['hasTime'] == true ) ? ' at ' . $post_meta['time'] : '';
    $language = ( $post_meta['language'] ) ? '<p>Language: ' . $post_meta['language'] . '</p>' : '';
    $organizer = ( $post_meta['organizer'] ) ? '<p>Organizer: ' . $post_meta['organizer'] . '</p>' : '';
    $link = ( $post_meta['link'] ) ? '<p>Link: <a href="' . $post_meta['link'] . '">' . $post_meta['link'] . '</a></p>' : '';
    ?>
  
    <article class="iip-event-article" id="post-<?php the_ID(); ?>">
      <h2>
        <?php echo( $post_meta['title'] ); ?>
      </h2>
      <div class="iip-event-hero">
        <figure class="iip-event-featured-image"><?php the_post_thumbnail(); ?></figure>
      </div>
      <div class="iip-event-meta">
        <p>When: <?php echo( $date . $time ) ?></p>
        <?php 
        echo( $language );
        echo( $organizer ); 
        echo( $link ); 
        ?>
      </div>
      <div class="iip-event-body">
        <p>
          <?php echo( $post_meta['description'] ); ?>
        </p>
      </div>
    </article>
    
    <?php
  
    endwhile;
  endif; 
  
  get_sidebar(); ?>

</div> <!-- End wrap -->
<?php

get_footer();