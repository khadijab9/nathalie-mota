
<?php /* Template Name: Test Index
*/ ?>

<?php get_header() ?>


<section class="banner" id="hero">
    <div class=hero-content>
  <?php  $args = array(
    'post_type' => 'attachment', // Type de post pour les médias
    'post_status' => 'inherit',
    'orderby' => 'rand', // Tri aléatoire
    'posts_per_page' => 1, // Une seule image aléatoire
);

$random_image = get_posts($args);
if ($random_image) {
    foreach ($random_image as $post) {
        // Obtenez l'URL de l'image
        $image_url = wp_get_attachment_url($post->ID);
        // Affichez l'image
        echo '<img src="' . esc_url($image_url) . '" alt="Image aléatoire">';
    } 
} ?>
    <h1> PHOTOGRAPHE EVENT</h1> 
    

    </div>


</section>

<!-- création des filtres -->


<?php
if( $terms = get_terms( array(
    'taxonomy' => 'categorie', 
    'orderby' => 'name'
) ) ) : 
	// si les catégories existent affiche la liste 
	echo '<select name="categoryfilter"><option value="">Catégories</option>';
	foreach ( $terms as $term ) :
		echo '<option value="' . $term->term_id . '">' . $term->name . '</option>'; // ID of the category as an option value
	endforeach;
	echo '</select>';
endif;
?>
<?php
if( $terms = get_terms( array(
    'taxonomy' => 'format', 
    'orderby' => 'name'
) ) ) : 
    // Si des formats existent, affichez la liste déroulante
    echo '<select name="formatfilter"><option value="">Formats</option>';
    foreach ( $terms as $term ) :
        echo '<option value="' . $term->term_id . '">' . $term->name . '</option>'; // ID du format comme valeur de l'option
    endforeach;
    echo '</select>';
endif;
?>
<?php
// vérifie si des options de tri sont disponible
$sorting_options = array(
    'date' => 'Date',
    
);

$current_sort = isset($_GET['orderby']) ? $_GET['orderby'] : '';

echo '<select name="orderby">';
echo '<option value="">Trier par</option>'; // Texte pour le tri par date

foreach ($sorting_options as $key => $label) {
    $selected = ($current_sort === $key) ? ' selected' : '';
    echo '<option value="' . esc_attr($key) . '"' . $selected . '>' . esc_html($label) . '</option>';
}

echo '</select>';
?>
 
    <?php




// Créez une requête pour obtenir les photos
$args = array(
    'post_type' => 'photo', // Type de contenu personnalisé
    'posts_per_page' => 8, // Afficher toutes les photos
  );
  
  $photos = new WP_Query($args);
  // Vérifiez si des photos sont trouvées
  if ($photos->have_posts()) :
    while ($photos->have_posts()) : $photos->the_post(); ?>
        <!-- Affiche l'image mise en avant (the_post_thumbnail) -->
          <a class="post-image" href="<?php the_permalink(); ?>">
            <?php the_post_thumbnail("large"); ?>
          </a>
    <?php endwhile;

  endif; ?>
  <?php wp_reset_postdata(); ?>

<div class="btn__wrapper">
  <a href="#!" class="btn btn__primary" id="load-more">Charger plus</a>
</div>
  
  
  
  
  
  
  
   
   

<?php get_footer() ?>