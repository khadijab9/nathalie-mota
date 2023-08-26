</main>
    
<?php get_template_part( 'template-parts/modale' ); ?>

<footer id=footer>
    <!-- <-- <div class="directionColumn"> -->
<?php wp_nav_menu( array( 
    'theme_location' => 'footer-menu', 
    ) )
    ; ?>
    <p class=textFooter> TOUS DROITS RESERVÉS</p>
    <!-- </div> -->


</footer>
</div>
<?php wp_footer() ?>
</body>
</html>