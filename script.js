// ========================================
// CONTADOR DO RELACIONAMENTO
// ========================================

const inicio = new Date("2025-06-13T00:00:00");

function atualizarContador() {

    const agora = new Date();

    let diferenca = agora - inicio;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    diferenca %= (1000 * 60 * 60 * 24);

    const horas = Math.floor(
        diferenca / (1000 * 60 * 60)
    );

    diferenca %= (1000 * 60 * 60);

    const minutos = Math.floor(
        diferenca / (1000 * 60)
    );

    diferenca %= (1000 * 60);

    const segundos = Math.floor(
        diferenca / 1000
    );


    document.getElementById("days").textContent =
        dias;

    document.getElementById("hours").textContent =
        horas;

    document.getElementById("minutes").textContent =
        minutos;

    document.getElementById("seconds").textContent =
        segundos;
}


atualizarContador();

setInterval(atualizarContador, 1000);


// ========================================
// HEADER AO ROLAR
// ========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ========================================
// ANIMAÇÃO DOS ELEMENTOS
// ========================================

const elementos = document.querySelectorAll(
    ".timeline-item, .music-card, .future-card, .photo-card"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(30px)";

    elemento.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(elemento);

});