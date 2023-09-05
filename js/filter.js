/* jQuery(document).ready(function($) {
    $('.js-filter').on('change', function() {
        // Récupérez les valeurs sélectionnées dans les filtres
        var categoryFilter = $('[name="categoryfilter"]').val();
        var formatFilter = $('[name="formatfilter"]').val();
        var orderbyFilter = $('[name="orderby"]').val();

        // Effectuez une requête AJAX pour récupérer les publications filtrées
        $.ajax({
            url: ajax_filter.ajax_url, // Assurez-vous d'inclure la variable ajax_url avec la valeur correcte dans votre template
            type: 'POST',
            data: {
                action: 'filter_posts',
                category: categoryFilter,
                format: formatFilter,
                orderby: orderbyFilter
            },
            success: function(response) {
                $('.filter-post').html(response.posts);
            }
        });
    });
}); */

/* jQuery(function($) {
    $('.js-filter').change(function() {
        var category = $('select[name=categoryfilter]').val();
        var format = $('select[name=formatfilter]').val();
        var orderby = $('select[name=orderby]').val();

        $.ajax({
            url: ajaxfilter.ajaxurl,
            data: {
                action: 'ajax_filter_posts',
                categoryfilter: category,
                formatfilter: format,
                orderby: orderby
            },
            type: 'POST',
            success: function(response) {
                $('#filter-ajax').html(response);
            }
        });
    }); */


    jQuery(document).ready(function($) {
        $('#categorie-filter, #format-filter, #tri-filter').on('change', function() {
            filterPhotos();
        });
    
        function filterPhotos() {
            var categorie = $('#categorie-filter').val();
            var format = $('#format-filter').val();
            var tri = $('#tri-filter').val();
    
            $.ajax({
                url: '/nathalie-mota/wp-admin/admin-ajax.php', // Utilisez la variable 'ajaxurl' fournie par WordPress
                type: 'POST',
                data: {
                    action: 'filter_photos',
                    categorie: categorie,
                    format: format,
                    tri: tri,
                },
                success: function(response) {
                    $('#photos-container').html(response);
                },
            });
        }
    
        filterPhotos(); // Initialisez les résultats au chargement de la page
    });