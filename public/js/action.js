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

async function init() {
    jour_nuit.btn = document.querySelector(".entete_jour-nuit");
    jour_nuit.body = document.querySelector("body");
    jour_nuit.input = document.querySelector(".jour_nuit-span");
    popupAccessibility.btn = document.querySelector(".button--accessibility");
    popupAccessibility.popup = document.querySelector(".accessibility-popup");
    popupAccessibility.close = document.querySelector(".close");
    popupAccessibility.animation = document.getElementById("animation");
    popupAccessibility.dys = document.getElementById("dys-font");
    popupAccessibility.malvoyant = document.getElementById("malvoyant-font");
    popupAccessibility.spacingLine = document.getElementById("spacing-line");
    popupAccessibility.spacingParagraphe = document.getElementById("spacing-paragraphe");
    popupAccessibility.spacingWord = document.getElementById("spacing-word");

    const { allRealisations } = await getRealisations();
    integrationRealisations(allRealisations);

    listenerEvent();
}

function integrationRealisations(allRealisations) {
    let articleRealisation = [];
    const divRealisations = document.querySelector(".realisations__div")

    allRealisations.forEach(realisation => {
        // console.log(realisation);
        const {id, title, img, alt_img, date, logiciels, description, details, url} = realisation;

        htmlRealisation = `
        <article class="realisations__items">
            <img class="realisations__image" src="./assets/projects/${img}" alt="${alt_img}">
            <div class="realisations__details">
                <h4 class="realisations__titre">${title}</h4>
                <p class="realisations__logiciel">${logiciels}</p>
                <p class="realisations__desc">${description}</p>
                <a href="./project.html?id=${id}" class="button">Voir le projet</a>
            </div>
        </article>`;

        articleRealisation.push(htmlRealisation);
    });

    console.log(articleRealisation)
    console.log(articleRealisation.join(''))
    divRealisations.innerHTML = articleRealisation.join('');
}

function listenerEvent() {
    //mode jour/nuit
    jour_nuit.btn.addEventListener("click", jourNuit);

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

    $('.entete_items:first-child a').on('click', smoothScroll);
    $('.entete_items:nth-child(2) a').on('click', smoothScroll);
    $('.entete_items:nth-child(3) a').on('click', smoothScroll);
    $('.entete_items:last-child a').on('click', smoothScroll);
    $('.button__scroll').on('click', smoothScroll);
}

function addClassAccessibility(input, classAccessibility) {
    if (input.checked) {
        document.querySelector("body").classList.add(classAccessibility)
    } else {
        document.querySelector("body").classList.remove(classAccessibility)
    }
}

function spacingLine() {
    const title = titleSelection();
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
    const title = titleSelection();
    console.log(title)
    title.forEach(element => {
        element.style.wordSpacing = `${popupAccessibility.spacingWord.value}em`;
    })

    document.querySelectorAll("body p").forEach(element => {
        element.style.wordSpacing = `${popupAccessibility.spacingWord.value}em`;
    })
}

function titleSelection() {
    let title = [];
    document.querySelectorAll("body h1").forEach(element => {
        title.push(element)
    });
    document.querySelectorAll("body h2").forEach(element => {
        title.push(element)
    });
    document.querySelectorAll("body h3").forEach(element => {
        title.push(element)
    });
    document.querySelectorAll("body h4").forEach(element => {
        title.push(element)
    });

    title.forEach(element => {
        element.style.lineHeight = `${popupAccessibility.spacingLine.value}em`
    })
    return title;
}

function smoothScroll() {
    var page = $(this).attr('href'); // Page cible
    var speed = 500; // Durée de l'animation (en ms)
    $('html, body').animate({ scrollTop: $(page).offset().top }, speed); // Go
    return false;
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

function mobileMenu() {
    if (menu.nav.classList.toggle('open')) {
        menu.nav.classList.add('open')
        menu.icon.classList.add('open')
    }
    else {
        menu.nav.classList.remove('open')
        menu.icon.classList.remove('open')
    }
}

init();