<?php
if (!defined('ABSPATH')) {
    exit; // Prevent direct access
}

function mytheme_enqueue_scripts() {
    wp_enqueue_script(
        'mytheme-main-js',
        get_template_directory_uri() . '/dist/main.js',
        array(),
        filemtime(get_template_directory() . '/dist/main.js'),
        true
    );
}

add_action('wp_enqueue_scripts', 'mytheme_enqueue_scripts');