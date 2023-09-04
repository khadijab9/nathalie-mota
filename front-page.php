<?php /* Template Name: Test Index
*/ ?>

<?php get_header() ?>


<section class="banner" id="hero">
    <div class=hero-content>
        <?php $args = array(
            'post_type' => 'attachment', // Type de post pour les médias
            'orderby' => 'rand', // Tri aléatoire
            'posts_per_page' => 1, // Une seule image aléatoire
        );

        $random_image = get_posts($args);
        if ($random_image) {
            foreach ($random_image as $post) {
                // Obtenez l'URL de l'image
                $image_url = wp_get_attachment_url($post->ID);
                // Affichez l'image
                echo '<img src="' . esc_url($image_url) . '" alt="Image aléatoire">';
            }
        } ?>
        <!-- <h1> PHOTOGRAPHE EVENT</h1> -->
    </div>
</section>




<!-- Créez une requête pour obtenir toutes les photos -->


<div id="filter-photo">
    <?php
    $args = array(
        'post_type' => 'photo', // Type de contenu personnalisé
        'posts_per_page' => 8, // Afficher toutes les photos
        'orderby' => 'date',
        'order' => 'DESC',
        'paged' => 1,
    );

    $photos = new WP_Query($args); ?>

    <div class="container-filtre">
        <!-- création des filtres -->
        <div class="filterAjax">
            <select id="categorie-filter">
                <option value="">CATEGORIES</option>
                <?php
                $categories = get_terms('categorie');
                foreach ($categories as $category) {
                    echo '<option value="' . $category->slug . '">' . $category->name . '</option>';
                } ?>
            </select>
            <select id="format-filter">
                <option value="">FORMATS</option>
                <?php
                $formats = get_terms('format');
                foreach ($formats as $format) {
                    echo '<option value="' . $format->slug . '">' . $format->name . '</option>';
                } ?>
            </select>
            <select id="tri-filter">
                <option value="date">TRIER PAR</option>
                <?php
                $dates = get_terms('date');
                foreach ($dates as $date) {
                    echo '<option value="' . $date->slug . '">' . $date->name . '</option>';
                } ?>
            </select>
        </div>
        <div class="containerPhoto">
            <?php
            // Vérifiez si des photos sont trouvées
            if ($photos->have_posts()) : ?>
                <?php while ($photos->have_posts()) : $photos->the_post(); ?>
                    <!-- Affiche l'image mise en avant (the_post_thumbnail) -->
                    <?php get_template_part('template-parts/post') ?>
                <?php endwhile; ?>

                <?php wp_reset_postdata(); ?>
            <?php endif;  ?>
        </div>
    </div>


    <div class="btn-cont">
        <!-- <a href="#!" class="btn btn__primary" id="load-more">Charger plus</a> -->
        <a href="#!" class="loadMore"> Charger plus</a>
    </div>


    <?php get_footer() ?>