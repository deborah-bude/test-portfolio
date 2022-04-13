const jour_nuit = {
    journuit_body: null,
    journuit_btn: null,
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

function init() {
    jour_nuit.journuit_btn = document.querySelector(".entete_jour-nuit");
    jour_nuit.journuit_body = document.querySelector("body");
    popupAccessibility.btn = document.querySelector(".button--accessibility");
    popupAccessibility.popup = document.querySelector(".accessibility-popup");
    popupAccessibility.close = document.querySelector(".close");

    listenerEvent();

    vueJS();
}

function listenerEvent() {
    //mode jour/nuit
    jour_nuit.journuit_btn.addEventListener("click", jourNuit);
    popupAccessibility.btn.addEventListener("click", () => {})
    popupAccessibility.btn.addEventListener("click", () => {popupAccessibility.popup.style.display="block"})
    popupAccessibility.close.addEventListener("click", () => {popupAccessibility.popup.style.display="none"})

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

function vueJS() {
    let competence = new Vue({
        el: '#competences__li',
        data: {
            competences_col_1: [
                {
                    title: 'Programmation front/back end',
                    desc: "HTML5, CSS3, JS, PHP, SQL",
                    img: './assets/data/019-code.svg',
                    delay: 100,
                },
                {
                    title: 'Programmation CMS',
                    desc: "Wordpress avec ACF, Elementor et Divi, conception de thème wordpress",
                    img: './assets/data/040-landing page.svg',
                    delay: 200,
                },
            ],
            competences_col_2: [
                {
                    title: 'Conception maquette site UX',
                    desc: "Figma, Adobe XD, Sketch",
                    img: './assets/data/036-ui design.svg',
                    delay: 300,
                },
                {
                    title: 'Logiciel Adobe et Affinity',
                    desc: "Photoshop, Illustrator, Affinity photo, InDesign, After effect",
                    img: './assets/data/026-design.svg',
                    delay: 400,
                }
            ],
        },
    })

    let rea = new Vue({
        el: '#realisations',
        data: {
            separator: " | ",
            realisations: [
                {
                    id: "0",
                    project: "Campus à Cultiver",
                    img: './assets/data/projects/campusacultiver.png',
                    alt_img: "Différentes vues du nouveau site de Campus à Cultiver",
                    date: 'Mai 2021',
                    logiciels: ["Wordpress", "ACF", "PHP", "CSS"],
                    description: "Projet tuteuré pour l'association Campus à Cultiver avec Mickaël Pedros et Margot Robert Piel avec une création de thème Wordpress",
                    details: "Site réalisé durant un projet tuteuré pour l'association Campus à Cultiver avec deux camarades de classe, Mickaël Pedros et Margot Robert Piel. Nous avons créé un thème wordpress en utilisant ACF pour le contenu statique en plus d’une partie blog qui sera mise à jour automatiquement à chaque article posté.",
                    url: 'http://www.campusacultiver.deborah-bude.fr'
                },
                {
                    id: "1",
                    project: "Refonte site web de l'Agence XPVR",
                    img: './assets/data/projects/agence-xpvr.png',
                    alt_img: "Différentes vues du nouveau site de l'Agence XPVR",
                    date: 'Avril 2021',
                    logiciels: ["Divi", "Figma", "JS"],
                    description: "Refonte de site web Wordpress réalisé durant mon alternance chez XPVR, une agence de production de film 360",
                    details: "Refonte de site web réalisé durant mon alternance chez XPVR, une agence de production de film 360 dédié aux professionnels. Les couleurs et graphismes principaux ont été choisi par L'Agence, une agence de communication à Limoges, quant à moi, j'ai réalisé les maquettes sur Figma et ait mis en ligne le site sur Wordpress en utilisant Divi.",
                    url: "http://www.agence-xpvr.fr"
                },
                {
                    id: "2",
                    project: "Projet Node JS",
                    img: './assets/data/projects/node-js.png',
                    alt_img: "Différentes vues du projet sur Node JS",
                    date: 'Février 2021',
                    logiciels: ["PHP", "My SQL", "CSS"],
                    description: "Projet de programmation avec NodeJS en back-end fait durant mon année de LP Web Design Sensoriel à Limoges en 2020-2021",
                    details: "Projet de programmation fait durant mon année de LP Web Design Sensoriel à Limoges en 2020-2021. Ce projet utilise NodeJS afin de pouvoir apprendre à faire des applications JS en faisant du back-end en même temps sans forcément utiliser du PHP pour cela."
                },
                {
                    id: "3",
                    project: "Snowpiercer",
                    img: './assets/data/projects/ux-snowpiercer.png',
                    alt_img: "Différentes vues de la maquette UX Snowpiercer",
                    date: 'Décembre 2020',
                    logiciels: ["Figma"],
                    description: "Maquette UX in-universe réalisé sur Snowpiercer accompagné d'une application pour accompagner les personnes durant la série",
                },
                {
                    id: "4",
                    project: "Ghibli",
                    img: './assets/data/projects/ux-ghibli.png',
                    alt_img: "Différentes vues de la maquette UX Ghibli",
                    date: 'Mars 2021',
                    logiciels: ["Figma"],
                    description: "Maquette UX d'une application sur le parc d'attraction Ghibli en vu de son ouverture avec une expérience avant, pendant et après la visite du parc"
                },
                {
                    id: "5",
                    project: "Les Dix Lunes",
                    img: './assets/data/projects/les-dix-lunes.png',
                    alt_img: "Maquette ordinateur, tablette et téléphone site Les Dix Lunes",
                    date: 'Mars 2022',
                    logiciels: ["Figma"],
                    description: "Maquette UX d'une application sur le parc d'attraction Ghibli en vu de son ouverture avec une expérience avant, pendant et après la visite du parc"
                },
            ],
        }
    })
}

//fonction jour nuit
function jourNuit() {
    if (jour_nuit.journuit_btn.classList.toggle("night_mode_btn")) {
        jour_nuit.journuit_body.classList.add("night_mode")
    }
    else {
        jour_nuit.journuit_body.classList.remove("night_mode")
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

$(document).ready(function () {
    init();
});