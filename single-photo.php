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
</div>







<p class="txt">Vous aimerez aussi</p>

<?php get_footer(); ?>
<!--   Contenu -->
<!-- <div id="article-content"> -->
<!-- Ajoute l'id du post en ID HTML et la liste des classes générées avec la méthode post_class -->
<!-- <article id="post<?php the_ID(); ?>" <?php post_class(); ?>> -->
<!-- <div class="entry-content">
                     
 // Afiche le contenu
//  the_content();
                    </div>
                </article>
            </div>
      </div>
    </div>


  