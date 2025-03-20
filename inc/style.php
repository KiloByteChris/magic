<?php
function theme_enqueue_styles() {
    wp_enqueue_style('magic-main-style', get_template_directory_uri() . '/dist/style.css', [], filemtime(get_template_directory() . '/dist/style.css'), 'all');
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');