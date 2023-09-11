<!-- <div id="overlay">
    <div class="related-photo filter-post photo-connexe">
        <a href="<?php the_permalink(); ?>">
            <?php the_post_thumbnail("large"); ?> </a>
    </div>
</div> -->




<div id="overlay">
    <div class="related-photo  imgPortfolio container-img">
        <a href="<?php the_permalink(); ?>" class="overlay-link post-image">
            <?php the_post_thumbnail("large"); ?>
            <div class="overlay-effect"></div>
            <img src="<?php echo get_template_directory_uri() . '/icon/eye-icon.png'; ?>" class="eye-icon">
             <img src="<?php echo get_template_directory_uri() . '/icon/Icon_fullscreen.png'; ?>" class="fullscreen-icon"> 
        </a>
    </div>
</div>