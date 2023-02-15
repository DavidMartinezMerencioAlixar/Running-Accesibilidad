function cambiarPagina() {
    window.load("./index.html");
}

let botonCerrarVideo = document.getElementById("botonCerrarVideo");

botonCerrarVideo.addEventListener("click", () => {
    document.getElementById("divVideo").classList.add("d-none");
    document.getElementById("divPaginaPrincipal").classList.remove("d-none");
});

let backgroundVideo = document.getElementById("background-video");
let miVideo = document.getElementById("miVideo");

window.addEventListener("load", () => {
    miVideo.addEventListener("play", () => {
        backgroundVideo.play();
    });

    miVideo.addEventListener("pause", () => {
        backgroundVideo.pause();
    });

    miVideo.addEventListener("ended", () => {
        backgroundVideo.play();
    });
});
