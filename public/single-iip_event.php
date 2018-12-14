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
    while( have_posts() ): the_post(); ?>
  
    <article class="iip-event-article" id="post-<?php the_ID(); ?>">
      <div class="iip-event-hero">
        <figure class="iip-event-featured-image"><?php the_post_thumbnail(); ?></figure>
      </div>
      <div class="iip-event-body">
        Test
      </div>
    </article>
    
    <?php
  
    endwhile;
  endif; 
  
  get_sidebar(); ?>

</div> <!-- End wrap -->
<?php

get_footer();