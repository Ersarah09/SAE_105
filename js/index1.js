// Extraction des paramètres d'URL
let param = new URLSearchParams(location.search);
// Création d'une instance de URLSearchParams pour analyser les paramètres de l'URL actuelle.
let sae = param.get('sae');
// Récupération de la valeur du paramètre 'sae' dans l'URL.

// Extraction des informations de la SAE
let titre = (SAE[sae].titre);
let descp = (SAE[sae].description);
let comp = SAE[sae]["compétences"].join(" / ");  
// La méthode join(" / ") convertit un tableau en une chaîne de caractères, séparées par " / "..
let ac = "";
let re = "";
let sem =(SAE[sae].semestre);



// Génération des apprentissages critiques (AC)
Object.keys(SAE[sae]["AC"]).forEach(function (acs) {
    ac += "<li><a href= 'PDF/" +acs+ ".pdf' class='PDFS' target='_blank'> <div>  <p>" + acs + "  : " + SAE[sae]["AC"][acs] + "</p>  </div> </a></li>";
      // Création d'un élément HTML pour chaque AC avec un lien vers un fichier PDF.
});

// Génération des ressources
Object.keys(SAE[sae]["ressources"]).forEach(function (res) {
    re += "<div ><p>" + res + "  : " + SAE[sae]["ressources"][res] + "</p></div>";
        // Création d'un élément HTML pour chaque ressource.
});

// Mise à jour du DOM
document.querySelector(".tt").innerHTML = "<h1>" + sae + " - " + titre + "</h1>";
// Mise à jour du titre principal de la page.

document.querySelector(".descp").innerHTML = "<div class='tligne'><p>Description :</p> <p class='de'>" + descp + "</p></div>";
// Mise à jour de la section "Description" avec le contenu de `descp`.

document.querySelector(".comp").innerHTML = "<div><span class='tligne'>Compétences :</span> <span class='compet'>" + comp + "</span></div>";
// Mise à jour de la section "Compétences" avec la liste des compétences.

document.querySelector(".acs").innerHTML = "<div><span class='tligne'>Apprentissages critiques :</span> <span class='apprentissage'>" + ac + "</span></div>";
// Mise à jour de la section "Apprentissages critiques" avec les éléments générés.

document.querySelector(".ress").innerHTML = "<div><span class='tligne'>Ressources :</span> <span class='ressour'>" + re + "</span></div>";
// Mise à jour de la section "Ressources" avec les éléments générés.

document.querySelector(".sem").innerHTML = "<div><span class='tligne'>Semestre :</span> <span class='semes'>" + sem + "</span></div>";
// Mise à jour de la section "Semestre" avec le semestre de la SAE.