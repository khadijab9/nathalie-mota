<?php /* Template Name: Test Index
*/ ?>

<?php get_header() ?>


<section class="banner" id="hero">
    <div class=hero-content>
        <?php $args = array(
            'post_type' => 'photo', // Type de post pour les médias
            'orderby' => 'rand', // Tri aléatoire
            'posts_per_page' => 1, // Une seule image aléatoire
        );

        $random_image = get_posts($args); // Récupère une image aléatoire 
        if ($random_image) { // vérifie si une image a été trouvé
            foreach ($random_image as $post) { //// Boucle pour traiter chaque image
                // Obtient l'URL de l'image
                the_post_thumbnail('large');
                // Affiche l'image

            }
        } ?>
        <h1> PHOTOGRAPHE EVENT</h1>
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

<!-- filtre -->
<div class="container-filtre">

<?php
// Obtenez l'ID de la catégorie par son slug
$concert_category = get_term_by('slug', 'concert', 'categorie');
$mariage_category = get_term_by('slug', 'mariage', 'categorie');
$reception_category = get_term_by('slug', 'reception', 'categorie');
$television_category = get_term_by('slug', 'television', 'categorie');
?>
<div id="filter">
<div class="select-cat">
    <div class="select-btn">
        <span class="Btn-text">Catégories</span>
        <img src="<?php echo get_template_directory_uri() . '/images/chevron.png'; ?>" class="chevron-down">
    </div>
    <ul class="list">
        <li class="option" data-slug="<?= $concert_category->slug; ?>">
            <span class="textOption"><?= $concert_category->name; ?></span>
        </li>
        <li class="option" data-slug="<?= $mariage_category->slug; ?>">
            <span class="textOption"><?= $mariage_category->name; ?> </span>
        </li>
        <li class="option" data-slug="<?= $reception_category->slug; ?>">
            <span class="textOption"><?= $reception_category->name; ?></span>
        </li>
        <li class="option" data-slug="<?= $television_category->slug; ?>">
            <span class="textOption"><?= $television_category->name; ?></span>
        </li>
    </ul>
</div>

<?php
//obtient l'Id du format par son slug
$format_paysage = get_term_by('slug', 'paysage', 'format');
$format_portrait = get_term_by('slug', 'portrait', 'format');


?>
<div class="select-cat">

    <div class="select-btn">
        <span class="Btn-text">Format</span>
        <img src="<?php echo get_template_directory_uri() . '/images/chevron.png'; ?>" class="chevron-down">
    </div>
    <ul class="list">
        <li class="format-option" data-slug="<?= $format_paysage->slug; ?>">
            <span class="textOption"><?= $format_paysage->name; ?></span>
        </li>
        <li class="format-option" data-slug="<?= $format_portrait->slug; ?>">
            <span class="textOption"><?= $format_portrait->name; ?></span>
        </li>
    </ul>

</div>
</div>


        <!-- <select id="format-filter">
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
            </select> -->

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