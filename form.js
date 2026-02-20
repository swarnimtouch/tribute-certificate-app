$(document).ready(function() {
    
    // Form Validation & Submission Logic
    $('#certificateForm').on('submit', function(event) {
        event.preventDefault(); // Default submission rokna
        
        var form = $(this)[0];
        
        // Bootstrap standard validation check
        if (!form.checkValidity()) {
            event.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        // Agar form valid hai toh aage ka process
        $(this).addClass('was-validated');
        
        // Button loading state dikhane ke liye
        var $btn = $('#generateBtn');
        var originalText = $btn.html();
        $btn.html('<i class="fa-solid fa-spinner fa-spin"></i> Generating...');
        $btn.prop('disabled', true);

        // Dummy process simulation (e.g., API call delay)
        setTimeout(function() {
            alert("Success! Details submitted. In a real MERN app, this would post to your backend.");
            $btn.html(originalText);
            $btn.prop('disabled', false);
            
            // Form reset
            $('#certificateForm')[0].reset();
            $('#certificateForm').removeClass('was-validated');
        }, 1500);
    });

    // Mobile number validation logic (only numbers allowed)
    $('#mobileNumber').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // Nav active tab switch logic (Optional: just for visual toggle if user clicks around)
    $('.custom-nav .nav-link').on('click', function(e) {
        e.preventDefault();
        $('.custom-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });

});