// Parcours de chaque clé de l'objet SAE
Object.keys(SAE).forEach(function (numSAE) {
    // Initialisation de la variable pour stocker les lignes de compétences
    let competencesHTML = '';

    // Création des lignes HTML pour chaque compétence de la SAE actuelle
    SAE[numSAE].compétences.forEach(competence => {
        competencesHTML += `<p class="compt">${competence}</p>`;
        // Chaque compétence est ajoutée dans un paragraphe avec la classe "compt"
    });

    // Création de l'élément HTML pour une SAE spécifique
    const saeHTML = `
        <a href="index2.html?sae=${numSAE}" class="sae-link">
            <div class="Part">
                            <!-- Affichage du numéro de la SAE -->
                <div class="numSAE">${numSAE}</div>
                            <!-- Affichage du titre de la SAE -->
                <div class="titre">${SAE[numSAE].titre}</div>
                            <!-- Affichage des compétences associées -->
                <div class="competences">
                    ${competencesHTML} <!-- Insérer les lignes de compétences -->
                </div>
            </div>
        </a>`;

    // Ajouter l'élément créé à la zone-cube
    document.querySelector(".zone-cube").innerHTML += saeHTML;
});
