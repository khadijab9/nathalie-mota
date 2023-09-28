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
            }
        } ?>
        <h1> PHOTOGRAPHE EVENT</h1>
    </div>
</section>


<!-- filtre -->
<div class="container-filtre">
    <!--  <?php
            // Obtenez l'ID de la catégorie par son slug
            $concert_category = get_term_by('slug', 'concert', 'categorie');
            $mariage_category = get_term_by('slug', 'mariage', 'categorie');
            $reception_category = get_term_by('slug', 'reception', 'categorie');
            $television_category = get_term_by('slug', 'television', 'categorie');
            ?>

    -->



    <div id="container-filter">

        <div class="cat-format">
            <div id="categorie-filter">
                <div class="select-btn">
                    <span class="text">categories</span>
                    <img src="<?php echo get_template_directory_uri() . '/icon/chevron.png'; ?>" class="chevron">
                </div>
                <ul id="categorie-list">
                    <li class="option" data-value="">Catégories</li>
                    <?php
                    $categories = get_terms('categorie');
                    foreach ($categories as $categorie) {
                        echo '<li class="option" data-value="' . $categorie->slug . '">' . $categorie->name . '</li>';
                    } ?>
                </ul>

            </div>

            <div id="format-filter">
                <div class="btn-format">
                    <span class="txtFormat">formats</span>
                    <img src="<?php echo get_template_directory_uri() . '/icon/chevron.png'; ?>" class="chevron">
                </div>
                <ul id="format-list">
                    <li class="options" data-value="">Formats</li>
                    <?php
                    $formats = get_terms('format');
                    foreach ($formats as $format) {
                        echo '<li class="options" data-value="' . $format->slug . '">' . $format->name . '</li>';
                    } ?>
                </ul>

            </div>
        </div>
        <div class="flexEnd">
            <div id="container-date">
                <div class="btn-date">
                    <span class="txtDate">trier par</span>
                    <img src="<?php echo get_template_directory_uri() . '/icon/chevron.png'; ?>" class="chevron">
                </div>
                <ul id="sort-filter" class="filter-list">
                    <li class="optionDate" data-value="DESC">Trier par</li>
                    <li class="optionDate" data-value="ASC">Plus anciens</li>
                    <li class="optionDate" data-value="DESC">Plus récents</li>
                </ul>
            </div>
        </div>
    </div>
</div>



<!-- Créez une requête pour obtenir toutes les photos -->
<?php
$args = array(
    'post_type' => 'photo', // Type de contenu personnalisé
    'posts_per_page' => 8, // Afficher toutes les photos
    'orderby' => 'date',
    'order' => 'DESC',
    'paged' => 1,
);

$photos = new WP_Query($args); ?>

<div class="containerPhoto">
    <?php
    // Vérifiez si des photos sont trouvées
    if ($photos->have_posts()) : ?>

        <?php while ($photos->have_posts()) : $photos->the_post(); ?>
            <?php get_template_part('template-parts/post') ?>
        <?php endwhile; ?>

        <?php wp_reset_postdata(); ?>
    <?php endif;  ?>
</div>


<div class="btn-cont">
    <!-- <a href="#!" class="btn btn__primary" id="load-more">Charger plus</a> -->
    <a href="#!" class="loadMore"> Charger plus</a>
</div>


<?php get_footer() ?>