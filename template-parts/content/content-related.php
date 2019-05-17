<?php
/**
 * Template part for displaying related post under the article (so it will be very concise)
 */

?>
<li class="related">
  <a href="<?php the_permalink() ?>">
	  <?php if ( has_post_thumbnail()) : // Check if thumbnail exists ?>
		  <?php the_post_thumbnail('thumbnail'); ?>
	  <?php endif; ?>
    <h5><?php the_title() ?></h5>
    <p><?php the_excerpt() ?></p>
  </a>
</li>