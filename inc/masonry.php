<?php

/**
 * Enqueue the masonry scripts
 */

// A category load the masonry scripts
if ( ! function_exists('modu_masonryScripts') ) :
	function modu_masonryScripts(){

		// customize with your category which will displayed with the masonry layout
		if(is_category()){
			// Pull Masonry from the core of WordPress
			wp_enqueue_script( 'imagesloaded', false, array('jquery', 'scripts-vendors'), null, true );
			wp_enqueue_script( 'masonry', false, array('imagesloaded'), null, true );
		}
	}
	add_action('wp_enqueue_scripts', 'modu_masonryScripts');
endif;

if ( ! function_exists('modu_cateogry_query') ) :
	function modu_cateogry_query( $query ) {
		// do not alter the query on wp-admin pages and only alter it if it's the main query
		if (!is_admin() && $query->is_main_query()){

			// alter the query for categories
			if(is_category()){
				$query->set('posts_per_page', 3);
			}

		}
	}
	add_action( 'pre_get_posts', 'modu_cateogry_query' );
endif;