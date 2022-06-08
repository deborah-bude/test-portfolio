const popupAccessibility = {
    btn: null,
    popup: null,
    selectAnimation: null,
    selectFont: null,
    inputSpacingLine: null,
    inputSpacingParagraher: null,
    inputSpacingWord: null,
    close: null,
}

function accessibility() {
    popupAccessibility.btn = document.querySelector(".button--accessibility");
    popupAccessibility.popup = document.querySelector(".accessibility-popup");
    popupAccessibility.close = document.querySelector(".close");
    popupAccessibility.animation = document.getElementById("animation");
    popupAccessibility.dys = document.getElementById("dys-font");
    popupAccessibility.malvoyant = document.getElementById("malvoyant-font");
    popupAccessibility.spacingLine = document.getElementById("spacing-line");
    popupAccessibility.spacingParagraphe = document.getElementById("spacing-paragraphe");
    popupAccessibility.spacingWord = document.getElementById("spacing-word");

    listenerEventaccessibility();
}

function listenerEventaccessibility() {
    popupAccessibility.btn.addEventListener("click", () => {
        popupAccessibility.popup.style.display = "flex";
        document.querySelector("body").style.overflow = "hidden";
    })
    popupAccessibility.close.addEventListener("click", () => {
        popupAccessibility.popup.style.display = "none";
        document.querySelector("body").style.overflow = "visible";
    })

    popupAccessibility.animation.addEventListener("click", () => { addClassAccessibility(popupAccessibility.animation, "no-animation") })
    popupAccessibility.dys.addEventListener("click", () => { addClassAccessibility(popupAccessibility.dys, "dys-font") })
    popupAccessibility.malvoyant.addEventListener("click", () => { addClassAccessibility(popupAccessibility.malvoyant, "malvoyant-font") })
    popupAccessibility.spacingLine.addEventListener("input", spacingLine);
    popupAccessibility.spacingParagraphe.addEventListener("input", spacingParagraphe);
    popupAccessibility.spacingWord.addEventListener("input", spacingWord);
}

function addClassAccessibility(input, classAccessibility) {
    if (input.checked) {
        document.querySelector("body").classList.add(classAccessibility)
    } else {
        document.querySelector("body").classList.remove(classAccessibility)
    }
}

function spacingLine() {
    const title = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    paragraphe = 1.8 * popupAccessibility.spacingLine.value

    title.forEach(element => {
        element.style.lineHeight = `${popupAccessibility.spacingLine.value}em`;
    })

    document.querySelectorAll("body p").forEach(element => {
        element.style.lineHeight = `${paragraphe}em`;
    })
}

function spacingParagraphe() {
    document.querySelectorAll("body p").forEach(element => {
        element.style.paddingTop = `${popupAccessibility.spacingParagraphe.value}px`;
        console.log(element.style)
    })
}

function spacingWord() {
    const title = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    console.log(title)
    title.forEach(element => {
        element.style.wordSpacing = `${popupAccessibility.spacingWord.value}em`;
    })

    document.querySelectorAll("body p").forEach(element => {
        element.style.wordSpacing = `${popupAccessibility.spacingWord.value}em`;
    })
}

accessibility();