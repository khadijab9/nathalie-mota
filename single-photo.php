<?php get_header(); ?>

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
        <?php $terms = get_the_terms(get_the_ID(), 'categorie');
        if (!empty($terms)) {
          echo '<p class="meta">CATÉGORIE : ';
          foreach ($terms as $term) {
            echo $term->name . '';
            $categoryFound = $term->slug;
          }}
        echo '</p>'; ?>
        <!-- Affiche le format -->
        <?php $formats = get_the_terms(get_the_ID(), 'format');
        if (!empty($formats)) {
          echo '<p class="meta">FORMAT : ';
          foreach ($formats as $format) {
            echo $format->name . ' ';
            $formatFound = $format->slug;
          }}
        echo '</p>'; ?>
        <p class="meta"> TYPE : <?php the_field('Type'); ?></p>
        <p class="meta date"> DATE : <?php the_field('Date'); ?></p>
      </div>
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

    <button type="button" id="contact-button" value="Contact"> Contact</button>


  </div>


  <!-- navigation -->
  <?php if (have_posts()) : ?>

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
      <!-- flêches de navigation -->
      <div class="carousel-navigation">
        <div class="prev-arrow">&larr;</div>
        <div class="next-arrow">&rarr;</div>
      </div>
    </div>
  <?php endif; ?>

</div>


<!-- photos apparenté du post actuel -->

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
$related_photos = new WP_Query($args);
// Vérifier si des photos liées sont trouvées
if ($related_photos->have_posts()) : ?>
  <div class="photo-connexe">
    <!-- boucle pour parcourir les photos liées de la requête $related_photos -->
    <?php while ($related_photos->have_posts()) : $related_photos->the_post(); ?>

      <?php get_template_part('template-parts/post'); ?>

    <?php endwhile; ?>
  </div>
<?php endif;  ?>


<?php get_footer(); ?>