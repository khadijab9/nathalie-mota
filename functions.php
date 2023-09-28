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
function your_theme_new_customizer_settings($wp_customize)
{
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

    wp_enqueue_script('modale_js', get_template_directory_uri() . '/js/modale.js', array(), filemtime(get_template_directory() . '/js/modale.js'), true);
    wp_enqueue_script('loadmore_js', get_template_directory_uri() . '/js/loadmore.js', array(), filemtime(get_template_directory() . '/js/loadmore.js'), true);
    wp_enqueue_script('burger_js', get_template_directory_uri() . '/js/burger.js', array(), filemtime(get_template_directory() . '/js/burger.js'), true);
    wp_enqueue_script('navigation_js', get_template_directory_uri() . '/js/navigation.js', array(), filemtime(get_template_directory() . '/js/navigation.js'), true);
    wp_enqueue_script('lightbox_js', get_template_directory_uri() . '/js/lightbox.js', array(), filemtime(get_template_directory() . '/js/lightbox.js'), true);
  }
add_action('wp_enqueue_scripts', 'enqueue_animations_js');


// fonction pour les filtres 

// charge e ficher fitre
function enqueue_ajax_scripts()
{
    // Assurez-vous d'avoir inclus jQuery correctement
    wp_enqueue_script('jquery');
    wp_enqueue_script('ajax-filter', get_template_directory_uri() . '/js/filter.js', array(), filemtime(get_template_directory() . '/js/filter.js'), true);
}

add_action('wp_enqueue_scripts', 'enqueue_ajax_scripts');



    

 




// btn lord more 
function load_more()
{
    $ajaxposts = new WP_Query([
        'post_type' => 'photo',
        'posts_per_page' => 8,
        'orderby' => 'date',
        'order' => 'DESC',
        'paged' => $_POST['paged'],
    ]);

    $response = '';
    $max_pages = $ajaxposts->max_num_pages;


    if ($ajaxposts->have_posts()) {
        ob_start();
        while ($ajaxposts->have_posts()) : $ajaxposts->the_post();
            $response .= get_template_part('template-parts/post', 'photo');
        endwhile;
        $output = ob_get_contents();
        ob_end_clean();
    } else {
        $response = '';
    }
    $result = [
        'max' => $max_pages,
        'html' => $output,
    ];
    echo json_encode($result);
    exit;
}
add_action('wp_ajax_load_more', 'load_more');
add_action('wp_ajax_nopriv_load_more', 'load_more');







 // Créez une fonction pour filtrer les photos par catégorie
 function filter_by_categorie() {
  $categorie = $_POST['categorie'];
   $format = $_POST['format'];
  $sort = $_POST ['sort'];


  $args = array(
    'post_type' => 'photo', // Le type de publication personnalisé
    'posts_per_page' => -1, // Afficher toutes les photos
    'orderby' => 'date', // Tri par date
    // 'order' => $_POST['order'] != '' ? $_POST['order'] : 'DESC',
    'order' => $sort != '' ? $sort : 'DESC',
   
  );

  
    // Si la catégorie est vide, récupérez toutes les photos
    if (!empty($categorie)) {
        // Crée une requête pour récupérer toutes les photos
      // Sinon, filtrez par catégorie
      $args['tax_query'][] = array(
          'taxonomy' => 'categorie',
          'field' => 'slug',
          'terms' => $categorie,
      );
     
    }
  
    // Ajoute le critère de format uniquement s'il est spécifié
    if (!empty($format)) {
        // Si un format est spécifié, on filtre par format
      $args['tax_query'][] = array(
          'taxonomy' => 'format',
          'field' => 'slug',
          'terms' => $format,
      );
    
  }


  //var_dump($args);

  $query = new WP_Query($args);

  if ($query->have_posts()) :
    while ($query->have_posts()) : $query->the_post();

    get_template_part('template-parts/post' , 'photo');

    endwhile;
    wp_reset_postdata();
  else :
    // Aucune photo trouvée pour cette catégorie

    
  endif;

  wp_die();
}


// Ajoutez une action Ajax pour la fonction de filtrage des photos
add_action('wp_ajax_filter_photos_by_category', 'filter_by_categorie');
add_action('wp_ajax_nopriv_filter_photos_by_category', 'filter_by_categorie'); 
 

    






