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
        // Quick visual click effect
        $(this).fadeOut(100).fadeIn(100);
        
        // You can replace this alert with actual logic (e.g., opening a YouTube iframe modal)
        console.log("Play Tribute Video clicked!");
        alert("Video modal will open here.");
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