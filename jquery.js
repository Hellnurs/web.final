$(document).ready(function() {
    $("#mainHeading").hide().fadeIn(1500);
    
    $(".btn").hover(
        function() {
            $(this).animate({ opacity: 0.8 }, 200);
        },
        function() {
            $(this).animate({ opacity: 1 }, 200);
        }
    );
    
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 800);
    });
    
    $("#skillsContainer").on('mouseenter', '.card', function() {
        $(this).animate({
            'margin-top': '-10px',
            'box-shadow': '0 10px 20px rgba(0,0,0,0.2)'
        }, 200);
    }).on('mouseleave', '.card', function() {
        $(this).animate({
            'margin-top': '0',
            'box-shadow': '0 2px 5px rgba(0,0,0,0.1)'
        }, 200);
    });
    
    $("input, textarea").focus(function() {
        $(this).css('border-color', '#0d6efd');
        $(this).parent().animate({
            'padding-left': '10px'
        }, 200);
    }).blur(function() {
        $(this).css('border-color', '#ced4da');
        $(this).parent().animate({
            'padding-left': '0'
        }, 200);
    });
    
    function animateAfterDelay(element, animation, delay, callback) {
        setTimeout(function() {
            element.animate(animation, 500, callback);
        }, delay);
    }
    
    animateAfterDelay(
        $(".hero"), 
        { 'background-color': '#f8f9fa' }, 
        1000, 
        function() {
            console.log("Background color animation complete!");
        }
    );
});