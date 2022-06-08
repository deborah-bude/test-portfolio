const jour_nuit = {
    body: null,
    btn: null,
    input: null,
    animation: null,
    dys: null,
    malvoyant: null,
    spacingLine: null,
    spacingParagraphe: null,
    spacingWord: null,
}

function listenerEvent() {
    jour_nuit.btn = document.querySelector(".entete_jour-nuit");
    jour_nuit.body = document.querySelector("body");
    jour_nuit.input = document.querySelector(".jour_nuit-span");

    //mode jour/nuit
    jour_nuit.btn.addEventListener("click", jourNuit);
}

//fonction jour nuit
function jourNuit() {
    if (jour_nuit.btn.classList.toggle("night_mode_btn")) {
        jour_nuit.body.classList.add("night_mode");
        jour_nuit.input.setAttribute("aria-label", "Mode nuit actif")
    }
    else {
        jour_nuit.body.classList.remove("night_mode")
        jour_nuit.input.setAttribute("aria-label", "Mode jour actif")
    }
}

listenerEvent();