</main>

<?php get_template_part('template-parts/modale'); ?>



<div class="lightbox"> </div> 



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