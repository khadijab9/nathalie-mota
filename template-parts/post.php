<!-- <div id="overlay">
    <div class="related-photo filter-post photo-connexe">
        <a href="<?php the_permalink(); ?>">
            <?php the_post_thumbnail("large"); ?> </a>
    </div>
</div> -->

<div id="overlay">
    <div class="related-photo filter-post photo-connexe">
        <a href="<?php the_permalink(); ?>" class="overlay-link">
            <?php the_post_thumbnail("large"); ?>
            <div class="overlay-effect"></div>
            <i class="fa-light fa-eye"></i>
        </a>
    </div>
</div>