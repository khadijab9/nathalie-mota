<?php get_header(); ?>



 <hr class="borderShadow"> 

<div class="containerPost">
  <?php
  // verifie si des publications existent
  if (have_posts()) : ?>

    <?php while (have_posts()) : the_post(); // Commence la boucle pour parcourir les publications 
    ?>
      <div class="post-content">
        <div class="post-meta">
          <!-- Données meta de chaque post -->
          <h2 class="post-title"><?php the_title() ?></h2>
          <p class="meta">REFERENCE : <span id="refPhoto"> <?php the_field('Référence'); ?> </span></p>
          <!-- Affiche la catégorie  -->
          <?php $categories = get_the_terms(get_the_ID(), 'categorie');
          if (!empty($categories)) {
            echo '<p class="meta">CATÉGORIE : ';
            foreach ($categories as $categories) {
              echo $categories->name . '';
              $categoryFound = $categories->slug;
            }
          }
          echo '</p>'; ?>
          <!-- Affiche le format -->
          <?php $formats = get_the_terms(get_the_ID(), 'format');
          if (!empty($formats)) {
            echo '<p class="meta">FORMAT : ';
            foreach ($formats as $format) {
              echo $format->name . ' ';
              $formatFound = $format->slug;
            }
          }
          echo '</p>'; ?>
          <p class="meta"> TYPE : <?php the_field('Type'); ?></p>
          <p class="meta date"> DATE : <?php the_field('Date'); ?></p>
       
        
        </div>
        <div class="container-img">
          <!-- <a class="post-image" href="<?php the_permalink(); ?>"> -->
            <?php the_post_thumbnail('large', array(
          'class' => 'photoLightbox',
          'data-reference' => get_field('Référence'),
          'data-categorie' => esc_attr($categoryFound)
        ))  ?>
            
            <!-- </a> -->
          
            <img src="<?php echo get_template_directory_uri() . '/icon/Icon_fullscreen.png'; ?>" class="fullscreen-icon" id="fullscreen">
            <div class="overlay"></div> 
        </div>
        <!-- <img class="post-image" src="<?php the_post_thumbnail_url('large'); ?>" alt="<?php the_title(); ?>"> -->

      </div>
    <?php endwhile; ?>
  <?php endif; ?>
</div>

<div id=containerBtn-nav>
  <div class="containerBtn">
    <div class="contact_btn">
      <p class="txt-contact"> Cette photo vous intéresse ? </p>

      <button type="button" id="contact-button" value="Contact"> Contact</button>


    </div>


    <!-- navigation -->

    <?php
    // Récupérer le post actuel
    $current_post = get_post();
    $previous_post = get_previous_post();
    $next_post = get_next_post();

    // Vérifier s'il y a un post précédent
    if ($previous_post) {
    // ds ce cas il extrait l'URL de l'image
      $previous_post_image_url = get_the_post_thumbnail_url($previous_post->ID, 'thumbnail');
    }

    if ($next_post) {
      $next_post_image_url = get_the_post_thumbnail_url($next_post->ID, 'thumbnail');
    } ?>

    <div class="containerNav">
      <!-- <div class="image-gallery"> -->

      <div class="imageThumbnail">
        <?php if (has_post_thumbnail()) : ?>
          <?php the_post_thumbnail('thumbnail'); ?>
        <?php endif; ?>
      </div>
      <!-- </div> -->
      <div class="arrow">
        <!-- Vérifie si un article précédent existe et s'il y a une image associée -->
        <?php if ($previous_post && $previous_post_image_url) : ?>
          <!-- Génère un lien vers l'article précédent avec l'URL de l'article et l'image en data -->
          <a href="<?php echo get_permalink($previous_post->ID); ?>" class="prev-arrow" data-image="<?php echo esc_url($previous_post_image_url); ?>">&larr;</a>
        <?php endif; ?>

        <?php if ($next_post && $next_post_image_url) : ?>
          <a href="<?php echo get_permalink($next_post->ID); ?>" class="next-arrow" data-image="<?php echo esc_url($next_post_image_url); ?>"> &rarr;</a>
        
          <?php endif; ?>
      </div>
    </div>



  </div>
  <!--   <?php if (have_posts()) : ?>

      <div class="post-carousel">
        <div class="carousel-inner">

          <div class="post-cont">
            <div class="container-img">
              <a class="post-img" href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail("thumbnail"); ?>
              </a>
            </div>
          </div>

        </div>
        <! flêches de navigation -->
  <!--  <div class="carousel-navigation">
          <div class="prev-arrow">&larr;</div>
          <div class="next-arrow">&rarr;</div>
        </div>
      </div>
  <?php endif; ?>  -->

</div>
</div>




<!-- photos apparenté du post actuel -->
<div class="photoApparente">
  <p class="txt">Vous aimerez aussi</p>
  <!-- boucle pour afficher les photos associées à la même catégorie -->
  <?php
  $category = wp_get_post_terms(get_the_ID(), 'categorie'); // Récupérer la catégorie du post courant
  $args = array( // Définit les arguments pour la requête WP_Query
    'post_type' => 'photo', //  type de contenu personnalisé à utiliser
    'posts_per_page' => 2,
    'post__not_in' => array(get_the_ID()),
    'tax_query' => array(
      array(
        'taxonomy' => 'categorie', // taxonomie à filtrer
        'field'    => 'slug', // Champ utilisé pour la comparaison
        'terms'    => $category[0]->slug, // Terme de la catégorie actuelle
      ),
    ),
  );
  // Créer une requête WP_Query avec les arguments définis
  $photos = new WP_Query($args);
  // Vérifier si des photos liées sont trouvées
  if ($photos->have_posts()) : ?>
    <div class="photo-connexe">
      <!-- boucle pour parcourir les photos liées de la requête $related_photos -->
      <?php while ($photos->have_posts()) : $photos->the_post(); ?>

        <?php get_template_part('template-parts/post'); ?>
      <?php endwhile; ?>
    </div>
    <?php wp_reset_postdata(); ?>
  <?php endif;  ?>
</div>

<div class="btn-cont">
  <!-- <a href="#!" class="btn btn__primary" id="load-more">Charger plus</a> -->
  <a href="/nathalie-mota" class="btn-photo"> Toutes les photos</a>
</div>


<?php get_footer(); ?>