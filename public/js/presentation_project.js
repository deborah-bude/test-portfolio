async function init() {
    const searchParams = new URLSearchParams(window.location.search);
    const projectId = searchParams.get("id");

    const { allRealisations } = await getRealisations();
    project = allRealisations[projectId];
    // project = allRealisations.findIndex(realisation => realisation.id === projectId);

    document.querySelector("#entete_page").innerHTML = project.title;
    document.querySelector("#title").innerHTML = project.title;
    document.querySelector("#project_image").src = `./assets/projects/${project.img}`;
    document.querySelector("#project_image").alt = `./assets/projects/${project.alt_img}`;
    document.querySelector("#project_details").innerHTML = `<p>${project.details}</p>`;

    let listDifficultes = [];
    project.difficultes.forEach(difficulte => {
        console.log(difficulte);
        listDifficultes.push(`<li>${difficulte}</li>`);
    });
    document.querySelector("#difficultes").innerHTML = listDifficultes.join('');
}

init()