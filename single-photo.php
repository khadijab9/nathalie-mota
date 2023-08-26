<?php get_header(); ?>


<?php
if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="post-content">
      <h2><?php the_title() ?></h2>
      <div class="post-meta">
        <!-- Données meta de chaque post -->
        <div class="review__pros">REFERENCE : <?php the_field('Référence'); ?></div>
        <div class="categories"> CATEGORIE :<?php the_terms(get_the_ID(), 'categorie'); ?> </div>
        <div class="formats"> FORMAT :<?php the_terms(get_the_ID(), 'format'); ?> </div>
        <div class="review__cons"> TYPE : <?php the_field('Type'); ?></div>
        <div class="review__cons"> DATE : <?php the_field('Date'); ?></div>
      </div>
      <!-- Affiche l'image mise en avant (the_post_tumbnail) -->
      <a class="post-image" href="<?php the_permalink(); ?>">
        <?php the_post_thumbnail("large"); ?> </a>
    </div>
  <?php endwhile; ?>
<?php endif; ?>

<div class="contact_btn">
  <p> Cette photo intéresse ? </p>
  <form>
    <input type="button" value="Contact" />
  </form>
</div>

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


  