async function init() {
    const { allCompetences } = await getcompetences();
    integrationCompetences(allCompetences);

    const { allRealisations } = await getRealisations();
    integrationRealisations(allRealisations);

    listenerEvent();
}

function integrationCompetences (allCompetences) {
    let competenceCol1 = [];
    let competenceCol2 = [];
    
    const divcompetenceCol1 = document.querySelector(".col1");
    const divcompetenceCol2 = document.querySelector(".col2");

    for (let i = 0; i < allCompetences.length; i++) {
        const { title, description, img } = allCompetences[i]
        const divCompetences = 
        `<div class="competences__items">
            <div class="front">
                <img class="competences__image" src="./assets/${img}" alt="Icône programmation">
                <p class="competences__title">${title}</p>
                <p class="competences__desc">${description}</p>
            </div>
            <div class="back">
                <p>${title}</p>
                <p>${description}</p>
            </div>
        </div>`;

        if (allCompetences.length / 2 > i) {
            competenceCol1.push(divCompetences)
        } else {
            competenceCol2.push(divCompetences)
        }
    }
    
    divcompetenceCol1.innerHTML = competenceCol1.join('');
    divcompetenceCol2.innerHTML = competenceCol2.join('');
}

function integrationRealisations(allRealisations) {
    let articleRealisation = [];
    const divRealisations = document.querySelector(".realisations__div")

    allRealisations.forEach(realisation => {
        // console.log(realisation);
        const {id, title, img, alt_img, date, logiciels, description, details, url} = realisation;

        htmlRealisation = `
        <article class="realisations__items element-item ux">
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

    divRealisations.innerHTML = articleRealisation.join('');
}

function listenerEvent() {
    $('.entete_items:first-child a').on('click', smoothScroll);
    $('.entete_items:nth-child(2) a').on('click', smoothScroll);
    $('.entete_items:nth-child(3) a').on('click', smoothScroll);
    $('.entete_items:last-child a').on('click', smoothScroll);
    $('.button__scroll').on('click', smoothScroll);
}

function smoothScroll() {
    var page = $(this).attr('href'); // Page cible
    var speed = 500; // Durée de l'animation (en ms)
    $('html, body').animate({ scrollTop: $(page).offset().top }, speed); // Go
    return false;
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