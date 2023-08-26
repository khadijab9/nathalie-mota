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

<div class="contact_btn">
  <p class="txt-contact"> Cette photo intéresse ? </p>
  <form>
    <input type="button" value="Contact" />
  </form>
  <!-- Champ caché pour préremplir la référence photo -->
<input type="hidden" id="refPhoto" value="Valeur préremplie">

  <div class="thumbnail-navigation">
    <div class="thumbnail-gallery">
        <?php
        $args = array(
            'post_type' => 'post',
            'posts_per_page' => -1,
        );
        $query = new WP_Query($args);
        
        if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post();
                $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'thumbnail');
                ?>
                <div class="thumbnail-slide">
                    <img src="<?php echo esc_url($thumbnail_url); ?>" alt="<?php the_title(); ?>">
                </div>
                <?php
            endwhile;
            wp_reset_postdata();
        endif;
        ?>
    </div>
</div>

    
</div>


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


  