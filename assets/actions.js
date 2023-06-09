document.addEventListener("DOMContentLoaded",() => {

    // google analitycs


    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-RJENLT127V');




    document.querySelectorAll(".card-header").forEach((cardHeader) => {
        cardHeader.addEventListener("click", () => {
            // cardHeader.parentNode.classList.toggle("active");
            var cardContent = cardHeader.nextElementSibling.classList.toggle("active")
        });
    });
    
    
    // navbar
    
        const menuBtn = document.querySelector(".hamburguer");
        const menuBtnIcon = document.querySelector(".hamburguer i");
        const scrollingNavbar = document.querySelector(".nav");
    
    
        menuBtn.onclick = function() {
            if (scrollingNavbar.classList.contains("active")) {
                CloseScrollingNavbar();
            } else {
                OpenScrollingNavbar();
            }
        }
    
        // cerrar navbar al cambiar window size
        window.addEventListener("resize", CloseScrollingNavbar);
    
        // cerrar navbar al hacer click en cualquier link
        document.querySelectorAll(".nav-link").forEach(function(link) {
            link.onclick = CloseScrollingNavbar;
        });
    
        // cerrar navbar
        function CloseScrollingNavbar(){
            scrollingNavbar.classList.remove("active");
            menuBtnIcon.classList = "fa-solid fa-bars"
        };
    
        // abrir navbar
        function OpenScrollingNavbar(){
            scrollingNavbar.classList.add("active");
            menuBtnIcon.classList = "fa-solid fa-xmark"
        };

    // formulario de contacto
    const formContacto = document.getElementById("form-contacto")
    formContacto.addEventListener("submit", (event) => {
        event.preventDefault()

        var formData = new FormData(formContacto)
        fetch("https://saladecontrol.pythonanywhere.com/registrar-contacto" , {
            method: "POST",
            body: formData,
        })
        .then((response) => {
            if (response.ok) {
                console.log("submit succesfully");
            }
            else {
                console.log("submit error");
            }
        })
        .catch((error) => {
            console.log("conection error");
        })

    });
});