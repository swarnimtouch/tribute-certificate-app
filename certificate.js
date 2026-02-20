$(document).ready(function() {
    
    // Download PDF Button Logic
    $('#downloadPdf').on('click', function() {
        // Button click animation
        $(this).animate({ opacity: 0.7 }, 100).animate({ opacity: 1 }, 100);
        
        console.log("Downloading PDF...");
        // Yahan par real MERN app me aap backend API hit karenge (e.g. window.open('/api/download/pdf', '_blank'))
        alert("Preparing PDF for download...");
    });

    // Download JPG Button Logic
    $('#downloadJpg').on('click', function() {
        $(this).animate({ opacity: 0.7 }, 100).animate({ opacity: 1 }, 100);
        
        console.log("Downloading JPG...");
        alert("Preparing Image for download...");
    });

    // Share on WhatsApp Button Logic
    $('#shareWhatsapp').on('click', function() {
        $(this).animate({ opacity: 0.7 }, 100).animate({ opacity: 1 }, 100);
        
        // WhatsApp API redirect logic
        var doctorName = "Dr. Julian Bennett";
        var message = "Check out my Golden Tribute Certificate of Appreciation! " + doctorName;
        var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
        
        console.log("Redirecting to WhatsApp...");
        window.open(whatsappUrl, '_blank');
    });

    // Nav active tab switch logic (Visual only)
    $('.custom-nav .nav-link').on('click', function(e) {
        e.preventDefault();
        $('.custom-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });

});