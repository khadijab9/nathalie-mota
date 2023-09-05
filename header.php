<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Nathalie Mota</title>
    <?php wp_head() ?>
</head>

<body>

    <header>
        <nav id=navigation>
            <div class=logo-image>
                <!-- revnoi à l'url de la page d'accueil du site -->
                <a href="<?php echo home_url(); ?>">
                    <?php
                    // vérifie si le logo a été défini sur le customizer wp et l'ajoute à la page 
                    if (get_theme_mod('your_theme_logo')) : ?>
                        <img id='logo' src="<?php echo get_theme_mod('your_theme_logo'); ?>" alt="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>">
                    <?php // Si aucun logo existe,  le titre de site s'affichera en utilisant la fonction bloginfo()
                    else : ?>
                        <h1 class="site-title"><?php bloginfo('name'); ?></h1>
                    <?php endif; ?>

                </a>

            </div>
            <div class="burgerMenu">
                <span class="line l1"></span>
                <span class="line l2"></span>
                <span class="line l3"></span>
            </div>

            <?php
            // affiche un menu de navigation
            wp_nav_menu(array(
                'theme_location' => 'main-menu',
                'menu_class' => 'navbar-nav mr-auto menu-full',
                'container' => false,
            )); ?>


        </nav>
    </header>

    <main>