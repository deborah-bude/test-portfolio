function getcompetences() {
    let allCompetences;
    return fetch('./public/js/project.json')
    .then(function (response) {
        return response.json()
    })
    .then((object) => {
        return ({
            allCompetences: object.competences
        })
    })
    .catch(function (error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}

async function getRealisations() {
    let allRealisations;
    return fetch('./public/js/project.json')
    .then(function (response) {
        return response.json()
    })
    .then((object) => {
        return ({
            allRealisations: object.realisations
        })
    })
    .catch(function (error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}