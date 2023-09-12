</main>

<?php get_template_part('template-parts/modale'); ?>


<div class="lightbox">
    <button class="lightbox-close">Fermer</button>
    <button class="lightbox-next">Suivant</button>
    <button class="lightbox-prev">Précédent</button>
    <div class="lightbox-contain">
        <?php the_post_thumbnail("large"); ?>
    </div>
</div>



<footer id=footer>
    <!-- <-- <div class="directionColumn"> -->
    <div class="footerColumn">
        <?php wp_nav_menu(array(
            'theme_location' => 'footer-menu',
        )); ?>
        <p class=textFooter> TOUS DROITS RESERVÉS</p>
    </div>
    <!-- </div> -->


</footer>
</div>
<?php wp_footer() ?>
</body>

</html>