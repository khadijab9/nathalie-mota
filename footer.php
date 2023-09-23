</main>

<?php get_template_part('template-parts/modale'); ?>


<div id="lightbox">
    <span class="close">&times; </span>
    <div class="prevArrow">&larr; Précédente</div>
    <div class="nextArrow"> Suivante &rarr;</div>
    <div class="lightbox-contain">
        <img src="" class="photoLightbox">

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