
<?php /* Template Name: Test Index
*/ ?>

<?php get_header() ?>


<section class="banner" id="hero">
    <div class=hero-content>

 <!-- <img src=<?php echo get_template_directory_uri() . '/images/nathalie-7.png'; ?> alt="image oscar">  -->
    <!-- <h1> PHOTOGRAPHE EVENT</h1> -->
    

    </div>


</section>

<!-- création des filtres -->


<?php
if( $terms = get_terms( array(
    'taxonomy' => 'categorie', // to make it simple I use default categories
    'orderby' => 'name'
) ) ) : 
	// if categories exist, display the dropdown
	echo '<select name="categoryfilter"><option value="">Catégories</option>';
	foreach ( $terms as $term ) :
		echo '<option value="' . $term->term_id . '">' . $term->name . '</option>'; // ID of the category as an option value
	endforeach;
	echo '</select>';
endif;
?>
<?php
if( $terms = get_terms( array(
    'taxonomy' => 'format', // Remplacez 'product_format' par le nom de votre taxonomie de format
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
// if the sorting options are available
$sorting_options = array(
    'date' => 'Date',
    
    // Ajoutez d'autres options de tri si nécessaire
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