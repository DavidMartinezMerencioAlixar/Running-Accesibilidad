function cambiarPagina() {
    window.load("./index.html");
}

let botonCerrarVideo = document.getElementById("botonCerrarVideo");

botonCerrarVideo.addEventListener("click", () => {
    document.getElementById("divVideo").classList.add("d-none");
    document.getElementById("divPaginaPrincipal").classList.remove("d-none");
});
