<?php

if (!defined('ABSPATH')) {
    exit; // Prevent direct access
}

// Auto-load all PHP files in /inc/
foreach (glob(get_template_directory() . '/inc/*.php') as $file) {
    require_once $file;
}