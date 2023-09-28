<div class="container-row">
    <div id="overlay">
        <div class="related-photo  imgPortfolio container-img">
            <span class="overlay-link post-image">
          <?php  $categories = ''; ?>
                <?php the_post_thumbnail('large', array(
                    'class' => 'photoLightbox',  
                    'data-reference' => get_field('Référence'),
          
                    'data-categorie' => esc_attr($categoryFound), )) ?>

                <div class="overlay-effect"></div>
                <a href="<?php the_permalink(); ?>"> <img src="<?php echo get_template_directory_uri() . '/icon/eye-icon.png'; ?>" class="eye-icon"> </a>
                <img src="<?php echo get_template_directory_uri() . '/icon/Icon_fullscreen.png'; ?>" class="fullscreen-icon" id="fullscreen">
                <div class="text-overlay">
                    <?php the_field('Référence') ?>
                    <?php $categories = get_the_terms(get_the_ID(), 'categorie');
          if (!empty($categories)) {
            foreach ($categories as $categories) {
              echo $categories->name . '';
              $categoryFound = $categories->slug;
            }
          } ?>
                </div>
            </span>
        </div>
    </div>
</div>