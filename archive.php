<?php
/**
 * The template for displaying archive pages
 */

get_header();
?>

    <section id="primary" class="content-area">
        <main id="main" class="site-main">

            <?php if ( have_posts() ) : ?>

                <header class="page-header">
                    <?php the_archive_title( '<h1 class="page-title main-width">', '</h1>' ); ?>
                </header>

                <?php

	            if(is_category(15)) {
	              // create the masonry wrapper
	              get_template_part( 'template-parts/category/loop', 'masonry' );

	            } else {

	              // Start the Loop.
	              while ( have_posts() ) : the_post();
		              get_template_part( 'template-parts/content/content', 'excerpt' );
                endwhile;


	              // Previous/next page navigation.
	              printf( '<div class="main-width alignwide text-center">%s</div>', modu_archive_nav() );
              }

            // If no content, include the "No posts found" template.
            else :

                get_template_part( 'template-parts/content/content', 'none' );

            endif;
            ?>
        </main><!-- /main -->
    </section><!-- /primary -->

<?php
get_footer();
