const inicio = new Date("2025-06-13T00:00:00");

function atualizarContador() {

    const agora = new Date();

    let diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    diferenca %= (1000 * 60 * 60 * 24);

    const horas = Math.floor(diferenca / (1000 * 60 * 60));

    diferenca %= (1000 * 60 * 60);

    const minutos = Math.floor(diferenca / (1000 * 60));

    diferenca %= (1000 * 60);

    const segundos = Math.floor(diferenca / 1000);


    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

atualizarContador();

setInterval(atualizarContador, 1000);
