$(document).ready(function() {
    
    // Navigation active state logic
    $('.custom-nav .nav-link').on('click', function(e) {
        e.preventDefault(); // Prevents page reload
        
        // Remove active class from all links
        $('.custom-nav .nav-link').removeClass('active');
        
        // Add active class to the clicked link
        $(this).addClass('active');
    });

    // Play button interaction
    $('#playBtn').on('click', function() {
        var video = $('#tributeVideo').get(0); // Video element ko select kiya
        var overlay = $('.overlay'); // Overlay container ko select kiya
        
        // 1. Video ko play karna
        video.play();
        
        // 2. Video tag me "controls" add karna taki pause/play kar sakein
        $('#tributeVideo').attr('controls', 'controls');
        
        // 3. Video element me 'playing' class add karna (taki CSS filter hat jaye aur video clear dikhe)
        $('#tributeVideo').addClass('playing');
        
        // 4. Overlay (Play button aur text) ko hide karna
        overlay.fadeOut(400); 
    });

    // Proceed Button Interaction
    $('#proceedBtn').on('click', function(e) {
        e.preventDefault();
        
        // Button par click effect create karne ke liye
        $(this).animate({ opacity: 0.7 }, 100).animate({ opacity: 1 }, 100);
        
        // Action: Yahan aap naye page ka link de sakte hain
        console.log("Proceed to certificate clicked!");
        // window.location.href = "certificate-form.html"; 
    });

});