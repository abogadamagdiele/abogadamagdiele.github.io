document.addEventListener("DOMContentLoaded",() => {
    document.querySelectorAll(".card-header").forEach((cardHeader) => {
        cardHeader.addEventListener("click", () => {
            // cardHeader.parentNode.classList.toggle("active");
            var cardContent = cardHeader.nextElementSibling.classList.toggle("active")
        });
    });
    

});