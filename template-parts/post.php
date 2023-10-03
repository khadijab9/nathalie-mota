<!-- <div class="container-row"> -->
  <div id="overlay">
    <div class="related-photo  imgPortfolio container-img">
      <span class="overlay-link post-image">
        <?php
        $categories = get_the_terms(get_the_ID(), 'categorie');
        if (!empty($categories)) {
          foreach ($categories as $categorie) {
            $categoryFound = $categorie->slug;
          }
        }
        ?>
        <?php the_post_thumbnail('large', array(
          'class' => 'photoLightbox',
          'data-reference' => get_field('Référence'),
          'data-categorie' => esc_attr($categoryFound)
        )) ?>

        <div class="overlay-effect"></div>
        <a href="<?php the_permalink(); ?>"> <img src="<?php echo get_template_directory_uri() . '/icon/eye-icon.png'; ?>" class="eye-icon"> </a>
        <img src="<?php echo get_template_directory_uri() . '/icon/Icon_fullscreen.png'; ?>" class="fullscreen-icon" id="fullscreen">
        <div class="text-overlay">
          <div class="textFormat">
          <?php the_field('Référence') ?>
          </div>
          <div class="textCat">
          <?php $categories = get_the_terms(get_the_ID(), 'categorie');
          if (!empty($categories)) {
            foreach ($categories as $categories) {
              echo $categories->name . '';
              $categoryFound = $categories->slug;
            }
          } ?>
          </div>
        </div>
      </span>
    </div>
  </div>
