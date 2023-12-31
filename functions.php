<?php

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
    wp_enqueue_script('jquery');
    wp_enqueue_script('modale_js', get_template_directory_uri() . '/js/modale.js', array(), filemtime(get_template_directory() . '/js/modale.js'), true);
    wp_enqueue_script('loadmore_js', get_template_directory_uri() . '/js/loadmore.js', array(), filemtime(get_template_directory() . '/js/loadmore.js'), true);
    wp_enqueue_script('burger_js', get_template_directory_uri() . '/js/burger.js', array(), filemtime(get_template_directory() . '/js/burger.js'), true);
    wp_enqueue_script('navigation_js', get_template_directory_uri() . '/js/navigation.js', array(), filemtime(get_template_directory() . '/js/navigation.js'), true);
    wp_enqueue_script('lightbox_js', get_template_directory_uri() . '/js/lightbox.js', array(), filemtime(get_template_directory() . '/js/lightbox.js'), true);
    wp_enqueue_script('ajax-filter', get_template_directory_uri() . '/js/filter.js', array(), filemtime(get_template_directory() . '/js/filter.js'), true);
}
add_action('wp_enqueue_scripts', 'enqueue_animations_js');


// btn lord more 
function load_more()
{
    $ajaxposts = new WP_Query([
        'post_type' => 'photo',
        'posts_per_page' => 8,
        'orderby' => 'date',
        'order' => 'DESC',
        'paged' => $_POST['paged'], //Page actuel demandée via AJAX
    ]);
    // initialise la variable $response, qui contiendra le HTML des photos à afficher
    $response = '';
    //contient le nombre total de pages de photos en fonction du nombre de publications trouvées dans la requête WP_Query 
    $max_pages = $ajaxposts->max_num_pages;

    //vérifie si la requête a trouvé des publications. 
    if ($ajaxposts->have_posts()) {
        ob_start();
        while ($ajaxposts->have_posts()) : $ajaxposts->the_post();
            //si c'esst la cas on affiche les photos en appelant le template et l'ajoute a $response
            $response .= get_template_part('template-parts/post', 'photo');
        endwhile;
        $output = ob_get_contents();
        ob_end_clean();
    } else {
        //Si aucune publication n'est trouvée, la variable $response reste vide.
        $response = '';
    }
    // Prépare la réponse JSON à renvoyer via AJAX
    $result = [
        'max' => $max_pages, // nb total de pages
        'html' => $output, //contenu html des posts
    ];
    //Envoi de la réponse JSON via AJAX
    //utilisée pour convertir le tableau $result en JSON
    echo json_encode($result);
    exit;
}
add_action('wp_ajax_load_more', 'load_more');
add_action('wp_ajax_nopriv_load_more', 'load_more');



//fonction pour gérer les filtres des photos 
function filter()
// récupére les paramètres de filtre depuis la requête AJAX.
{
    $categorie = $_POST['categorie'];
    $format = $_POST['format'];
    $sort = $_POST['sort'];

    // Définit les arguments de la requête pour récupérer les photos
    $args = array(
        'post_type' => 'photo', // Le type de publication personnalisé
        'posts_per_page' => -1, // Afficher toutes les photos
        'orderby' => 'date', // Tri par date
        'order' => $sort != '' ? $sort : 'DESC', //ordre de tri du plus récent
    );

    // Si une catégorie est spécifié,  un critère de taxonomie est ajouté à la requête.
    if (!empty($categorie)) {
        //la fonction utilise la requête tax_query() pour rechercher les photos dans la taxo spécifiée.
        $args['tax_query'][] = array(
            'taxonomy' => 'categorie',
            'field' => 'slug',
            'terms' => $categorie,
        );
    }

    if (!empty($format)) {
        // Si un format est spécifié, on filtre par format
        $args['tax_query'][] = array(
            'taxonomy' => 'format',
            'field' => 'slug',
            'terms' => $format,
        );
    }
    //effectue une requête WP_Query avec les arguments spécifiés pour écupérér les photos 
    $query = new WP_Query($args);

    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();

            get_template_part('template-parts/post', 'photo');

        endwhile;
        //les données de publication sont réinitialisées
        wp_reset_postdata();
    else :
    // Aucune photo trouvée pour cette catégorie
    endif;
    //on  termine la requête AJAX et on renvoie une réponse JSON au client
    wp_die();
}

// Ajoutez une action Ajax pour la fonction de filtrage des photos
add_action('wp_ajax_filter_photos', 'filter');
add_action('wp_ajax_nopriv_filter_photos', 'filter');
