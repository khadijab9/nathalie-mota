
<?php /* Template Name: Test Index
*/ ?>

<?php get_header() ?>


<section class="banner" id="hero">
    <div class=hero-content>
 <!-- <img src=<?php echo get_template_directory_uri() . '/images/nathalie-7.png'; ?> alt="image oscar">  -->
    <!-- <h1> PHOTOGRAPHE EVENT</h1> -->
    

    </div>


</section>

 
 
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