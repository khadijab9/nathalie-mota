
<?php
// require get_template_directory() . '/ajaxfilter.php';

// require get_template_directory() . '/customizer/header-logo.php';
function theme_enqueue_styles()
{
    wp_enqueue_style('main-style', get_template_directory_uri() . '/css/main.css', array(), filemtime(get_template_directory() . '/css/main.css'));
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');


//créer un emplacemet pour le menu header et footer dans wp
function custom_theme_setup()
{
    add_theme_support('menu');
    add_theme_support('footer');

    register_nav_menu('main-menu', __('Menu de navigation'));
    register_nav_menu('footer-menu', __('Pieds de page'));
}

add_action('after_setup_theme', 'custom_theme_setup');



//utilise le Customizer de WordPressa pour l'ajout d'une option permettant de télécharger un logo pour le site.
function your_theme_new_customizer_settings($wp_customize){
    // créer un réglage (add_setting) pour le logo et un contrôle (add_control) pour télécharger l'image en tant que logo
    $wp_customize->add_setting('your_theme_logo');
    $wp_customize->add_control(new WP_Customize_Image_Control(
        $wp_customize,
        'your_theme_logo',
        array(
            'label' => 'Upload Logo',
            'section' => 'title_tagline',
            'settings' => 'your_theme_logo',
        )
    ));
}
add_action('customize_register', 'your_theme_new_customizer_settings');


// charge les fichiers js
function enqueue_animations_js()
{
   // Déclarer le JS
   wp_enqueue_script( 'btn-contact', get_template_directory_uri() . '/js/btn-contact.js',  array( ), '1.0', true);
    wp_enqueue_script('modale_js', get_template_directory_uri() . '/js/modale.js', array(), '1.1', true);
    wp_enqueue_script('loadmore_js', get_template_directory_uri() . '/js/loadmore.js', array('jquery'), '1.1', true);
}
add_action('wp_enqueue_scripts', 'enqueue_animations_js');


// fonction pour les filtres 

// charge e ficher fitre
function enqueue_ajax_scripts() {
    // Assurez-vous d'avoir inclus jQuery correctement
wp_enqueue_script('jquery');
    wp_enqueue_script('ajax-filter', get_template_directory_uri() . '/js/filter.js', array('jquery'), '1.0', true);
    wp_localize_script('ajax-filter', 'ajaxfilter', array('ajaxurl' => admin_url('admin-ajax.php')));
 
}

add_action('wp_enqueue_scripts', 'enqueue_ajax_scripts');


// Fonction pour filtrer les photos

add_action('wp_ajax_filter_photos', 'filter_photos');
add_action('wp_ajax_nopriv_filter_photos', 'filter_photos');

function filter_photos() {
   
    $args = array(
        'post_type' => 'photo',
        'posts_per_page' => -1,
        'order' => 'DESC', // Ordre de tri
        'orderby' => $tri, // Champ de tri
    );

    if (!empty($cat)) {
        $args['tax_query'][] = array(
            'taxonomy' => 'categorie',
            'field' => 'slug',
            'terms' => $cat,
        );
    }

    if (!empty($format)) {
        $args['tax_query'][] = array(
            'taxonomy' => 'format',
            'field' => 'slug',
            'terms' => $format,
        );
    }

    $photos = new WP_Query($args);

    if ($photos->have_posts()) :
        while ($photos->have_posts()) : $photos->the_post(); ?>
            <div class="related-photo filter-post">
                <a href="<?php the_permalink(); ?>">
                    <?php the_post_thumbnail("large"); ?>
                </a>
            </div>
        <?php endwhile;
        wp_reset_postdata();
    else :
        echo 'Aucune photo trouvée.';
    endif;

    die(); // Important pour terminer correctement la réponse AJAX
}




// btn lord more 
function load_more() {
    $ajaxposts = new WP_Query([
      'post_type' => 'photo',
      'posts_per_page' => 8,
      'orderby' => 'date',
      'order' => 'DESC',
      'paged' => $_POST['paged'],
    ]);
  
    $response = '';
   

    if($ajaxposts->have_posts()) {
      while($ajaxposts->have_posts()) : $ajaxposts->the_post();
        $response .= get_template_part('template-parts/post', 'photo');
      endwhile;
    } else {
      $response = '';
    }
    
  
    echo $response;
    exit;
  }
  add_action('wp_ajax_load_more', 'load_more');
  add_action('wp_ajax_nopriv_load_more', 'load_more');

   
   
 