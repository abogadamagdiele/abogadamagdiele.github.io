document.addEventListener("DOMContentLoaded",() => {
    document.querySelectorAll(".card-header").forEach((cardHeader) => {
        cardHeader.addEventListener("click", () => {
            // cardHeader.parentNode.classList.toggle("active");
            var cardContent = cardHeader.nextElementSibling.classList.toggle("active")
        });
    });
    
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