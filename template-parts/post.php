<!-- <div id="overlay">
    <div class="related-photo filter-post photo-connexe">
        <a href="<?php the_permalink(); ?>">
            <?php the_post_thumbnail("large"); ?> </a>
    </div>
</div> -->



<div class="container-row">
    <div id="overlay">
        <div class="related-photo  imgPortfolio container-img">
            <span class="overlay-link post-image">
                <?php the_post_thumbnail("large"); ?>
                <div class="overlay-effect"></div>
                <a href="<?php the_permalink(); ?>"> <img src="<?php echo get_template_directory_uri() . '/icon/eye-icon.png'; ?>" class="eye-icon"> </a>
                <img src="<?php echo get_template_directory_uri() . '/icon/Icon_fullscreen.png'; ?>" class="fullscreen-icon" id="fullscreen">
                <div class="text-overlay">
                    <?php the_field('Référence') ?>
                    <?php $terms = get_the_terms(get_the_ID(), 'categorie');
                    if (!empty($terms)) {
                        foreach ($terms as $term) {
                            echo $term->name . '';
                            $categoryFound = $term->slug;
                        }
                    } ?>
                </div>
            </span>
        </div>
    </div>
</div>