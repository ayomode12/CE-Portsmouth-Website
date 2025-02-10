document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }

        slides[slideIndex - 1].style.display = "block";

        // Update active dot indicator
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex - 1].className += " active";

        setTimeout(showSlides, 3000); // Change image every 2 seconds
    }


    document.querySelector(".prev").addEventListener("click", function() {
        plusSlides(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        plusSlides(1);
    });

    function plusSlides(n) {
        slideIndex += n - 1; // Adjust because showSlides() auto-increments
        if (slideIndex < 0) { slideIndex = 0; }
        showSlides();
    }

    // Dots Navigation
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function() {
            currentSlide(i + 1);
        });
    }

    function currentSlide(n) {
        slideIndex = n - 1; // Set index to the selected slide
        showSlides();
    }
});
