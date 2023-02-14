let htmlTemaOscuro, temaClaro;

window.addEventListener("load", inicio);

function inicio() {
    htmlTemaOscuro = document.getElementById("modoOscuro");
    temaClaro = true;
    loginCheckbox = document.getElementById("loginCheckbox");

    htmlTemaOscuro.addEventListener("click", alternarTema);
}

function alternarTema() {
    temaClaro ? aplicarTemaOscuro() : aplicarTemaClaro();
}

function aplicarTemaClaro() {
    document.querySelectorAll('.bg-dark').forEach((element) => {
        element.className = element.className.replace(/-dark/g, '-light');
    });

    document.body.classList.add('bg-light');

    if (document.body.classList.contains('text-light')) {
        document.body.classList.replace('text-light', 'text-dark');
    } else {
        document.body.classList.add('text-dark');
    }

    temaClaro = true;
}

function aplicarTemaOscuro() {
    document.querySelectorAll('.bg-light').forEach((element) => {
        element.className = element.className.replace(/-light/g, '-dark');
    });

    document.body.classList.add('bg-dark');
    if (document.body.classList.contains('text-dark')) {
        document.body.classList.replace('text-dark', 'text-light');
    } else {
        document.body.classList.add('text-light');
    }
    
    temaClaro = false;
}
