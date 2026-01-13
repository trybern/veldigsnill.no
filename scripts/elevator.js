const elevatorButton = document.getElementById("elevator-button");

// Show the button when scrolling down
window.addEventListener("scroll", () => {
          const scrollPosition = window.scrollY || document.documentElement.scrollTop;
          elevatorButton.classList.toggle("visible", scrollPosition > 100);
});

// Scroll to top on click
elevatorButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}); 