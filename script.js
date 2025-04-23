
$(document).ready(function() {
    // Initially show the 'home' tab
    $('#home').addClass('active');

    // Handle navigation link clicks
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        const targetId = $(this).attr('href').substring(1); // Get the ID of the target tab

        // Deactivate the current active tab with fadeOut
        $('.tab-content.active').removeClass('active').fadeOut(300, function() {
            // Activate the target tab with fadeIn
            $('#' + targetId).addClass('active').fadeIn(300);
        });

        // Update the active class on the navigation links
        $('.nav-item').removeClass('active');
        $(this).closest('.nav-item').addClass('active');
    });
});