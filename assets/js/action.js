const jour_nuit = {
    journuit_body: null,
    journuit_btn: null,
    btn: null,
    entete: null,
    jour_nuit_span: null,
    titre: null,
    apropos: null,
    competences: null,
    realisations: null,
    contact: null,
    footer: null
}

const menu = {
    icon: null,
    nav: null,
    icon_part1: null,
    icon_part2: null,
    icon_part3: null,
}


function init() {
    console.log(document.readyState)

    jour_nuit.journuit_btn = document.querySelector(".entete_jour-nuit");
    jour_nuit.journuit_body = document.querySelector("body");
    jour_nuit.entete = document.querySelector(".entete_nav");
    jour_nuit.jour_nuit_span = document.querySelector(".jour_nuit-span");
    jour_nuit.titre = document.querySelectorAll(".titre-section");
    jour_nuit.apropos = document.querySelector("#a_propos");
    jour_nuit.competences = document.querySelector("#competences");
    jour_nuit.realisations = document.querySelector("#realisations");
    jour_nuit.contact = document.querySelector("#contact");
    jour_nuit.footer = document.querySelector("footer");

    menu.icon = document.querySelector(".entete_mobile-menu");
    menu.nav = document.querySelector(".entete_computer-menu");
    
    listenerEvent();

    vueJS();
}

function listenerEvent() {
    //mode jour/nuit
    jour_nuit.journuit_btn.addEventListener("click", jourNuit);

    menu.icon.addEventListener("click", mobileMenu);
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
    if (jour_nuit.journuit_btn.classList.toggle("btn_night")) {
        jour_nuit.journuit_body.classList.add("body_night")
        //entete
        jour_nuit.journuit_btn.classList.add("btn_night");
        jour_nuit.entete.classList.add("entete_nav__night");
        jour_nuit.jour_nuit_span.classList.add("jour_nuit_span_night");
        //titre
        for (let i = 0; i < jour_nuit.titre.length; i++) {
            jour_nuit.titre[i].classList.add("section__titre_night");
        }
        //apropos
        jour_nuit.apropos.classList.add("apropos_night");
        //competences
        jour_nuit.competences.classList.add("competences_night");
        //rea
        jour_nuit.realisations.classList.add("realisations_night");
        //contact
        jour_nuit.contact.classList.add("contact_night");
        jour_nuit.footer.classList.add("footer_night");
    }
    else {
        jour_nuit.journuit_body.classList.remove("body_night")
        //entete
        jour_nuit.journuit_btn.classList.remove("btn_night");
        jour_nuit.entete.classList.remove("entete_nav__night");
        jour_nuit.jour_nuit_span.classList.remove("jour_nuit_span_night");
        //titre
        for (let i = 0; i < jour_nuit.titre.length; i++) {
            jour_nuit.titre[i].classList.remove("section__titre_night");
        }
        //apropos
        jour_nuit.apropos.classList.remove("apropos_night");
        //competences
        jour_nuit.competences.classList.remove("competences_night");
        //rea
        jour_nuit.realisations.classList.remove("realisations_night");
        //contact
        jour_nuit.contact.classList.remove("contact_night");
        jour_nuit.footer.classList.remove("footer_night");
    }
}

function mobileMenu() {
    console.log(menu.nav);
    if (menu.nav.classList.toggle('open')) {
        menu.nav.classList.add('open')
        menu.icon.classList.add('open')
    }
    else{
        menu.nav.classList.remove('open')
        menu.icon.classList.remove('open')
    }
}

$(document).ready(function () {
    init();
});