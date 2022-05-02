function getcompetences() {
    let competences;
    return fetch('../public/project.json')
    .then(function (response) {
        return response.json()
    })
    .then((object) => {
        console.log(object.competences)
        return ({
            competences: object.competences
        })
    })
    .catch(function (error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}

async function getRealisations() {
    let allRealisations;
    return fetch('./public/project.json')
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