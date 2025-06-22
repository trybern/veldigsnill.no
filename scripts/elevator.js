const elevatorButton = document.getElementById("elevator-button");

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        elevatorButton.classList.add("visible");
    } else {
        elevatorButton.classList.remove("visible");
    }
};

// Scroll to top on click
elevatorButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}); 