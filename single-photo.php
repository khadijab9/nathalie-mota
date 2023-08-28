<?php get_header(); ?>


<?php
if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="post-content">
      <div class="post-meta">
        <!-- Données meta de chaque post -->
        <h2 class="post-title"><?php the_title() ?></h2>

        <span class="meta">REFERENCE : <?php the_field('Référence'); ?></span>
        <span class="meta"> CATEGORIE :<?php the_terms(get_the_ID(), 'categorie'); ?> </span>
        <span class="meta"> FORMAT :<?php the_terms(get_the_ID(), 'format'); ?> </span>
        <span class="meta"> TYPE : <?php the_field('Type'); ?></span>
        <span class="meta date"> DATE : <?php the_field('Date'); ?></span>
      </div>
      <!-- Affiche l'image mise en avant (the_post_tumbnail) -->
      <!-- Affiche l'image mise en avant (the_post_tumbnail) -->
      <div class="container-img">
        <a class="post-image" href="<?php the_permalink(); ?>">
          <?php the_post_thumbnail("large"); ?> </a>

      </div>
      <!-- <img class="post-image" src="<?php the_post_thumbnail_url('large'); ?>" alt="<?php the_title(); ?>"> -->

    </div>
  <?php endwhile; ?>
<?php endif; ?>

<div class="containerBtn">
  <div class="contact_btn">
    <p class="txt-contact"> Cette photo intéresse ? </p>
    <form id="contact-form">
      <input type="button" id="contact-button" value="Contact" />
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </form>
  </div>

  <?php if (have_posts()) : ?>
    <?php
    $args = array(
      'order' => 'DESC', // ASC ou DESC 
      'orderby' => 'date',
    );
    $query = new WP_Query($args); ?>
    <div class="post-carousel">
      <div class="carousel-inner">
        <?php while (have_posts()) : the_post(); ?>
          <div class="post-cont">
            <div class="container-img">
              <a class="post-img" href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail("thumbnail"); ?>
              </a>
            </div>
          </div>
        <?php endwhile; ?>
      </div>
      <div class="carousel-navigation">
        <div class="prev-arrow">&larr;</div>
        <div class="next-arrow">&rarr;</div>
      </div>
    </div>
  <?php endif; ?>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
$(document).ready(function($) {
    var currentSlide = 0;
    var numSlides = $('.post-cont').length;

    $('.next-arrow').click(function() {
      currentSlide = (currentSlide + 1) % numSlides;
      updateCarousel();
    });

    $('.prev-arrow').click(function() {
      currentSlide = (currentSlide - 1 + numSlides) % numSlides;
      updateCarousel();
    });

    function updateCarousel() {
      $('.post-cont').removeClass('active');
      $('.post-cont:eq(' + currentSlide + ')').addClass('active');
    }
  });



  </script>
</div>







<p class="txt">Vous aimerez aussi</p>
  <!-- Deuxième boucle pour afficher les photos associées à la même catégorie -->
  <?php
    $current_category = wp_get_post_terms(get_the_ID(), 'categorie'); // Récupérer la catégorie du post courant

    $args = array(
      'post_type' => 'photo', //  type de contenu personnalisé utilisez
      'posts_per_page' => 2,
      'tax_query' => array(
        array(
          'taxonomy' => 'categorie',
          'field'    => 'slug',
          'terms'    => $current_category[0]->slug,
        ),
      ),
    );

    $related_photos = new WP_Query($args);

    if ($related_photos->have_posts()) :
      while ($related_photos->have_posts()) : $related_photos->the_post();
        ?>
        <div class="related-photo">
          <a href="<?php the_permalink(); ?>">
            <?php the_post_thumbnail("large"); ?> </a>
          
          <p><?php the_excerpt(); ?></p>
        </div>
      <?php endwhile;
      wp_reset_postdata();
    endif;
    ?>


<?php get_footer(); ?>



  