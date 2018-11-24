
//initialisation des variables

var txt_recettes = document.getElementById("txt_recettes");
var recettes = document.getElementById("recettes");
var txt_depenses =  document.getElementById("txt_depenses");
var depenses = document.getElementById("depenses");
var epargne = document.getElementById("epargne");

var resultat_recettes = document.getElementById("resultat_recettes");
var resultat_depenses = document.getElementById("resultat_depenses");
var resultat_epargne = document.getElementById("resultat_epargne");
var resultat = document.getElementById("resultat");

var nom_recettes = document.getElementById("txt_rec");
var nom_depenses = document.getElementById("txt_dep");

var affichage_epargne = document.getElementById("epa");

// mise à 0 des inputs

recettes.value = 0;
depenses.value = 0;
epargne.value = 0;

// initialisation des variables d'entrée

var a = 0;
var b = 0;
var c = 0;
var d = "";
var e = "";

// initialisation des variables de calcul

var add = 0;
var bdd = 0;
var cdd = 0;

// vide des inputs

function blanc() {

    recettes.value = "0";
    depenses.value = "0";
    epargne.value = "0";

    txt_recettes.value = "";
    txt_depenses.value = "";
}

//reset de toutes les variables

function reset() {

    recettes.value = "0";
    depenses.value = "0";
    epargne.value = "0";

    add = 0;
    bdd = 0;
    cdd = 0;

    txt_recettes.value = "";
    txt_depenses.value = "";

    nom_recettes.innerHTML = "";
    nom_depenses.innerHTML = "";
    affichage_epargne.innerHTML = "";
    resultat_recettes.innerHTML = "";
    resultat_depenses.innerHTML = "";
    resultat_epargne.innerHTML = "";
    resultat.innerHTML = "";
}


// mise en action des opérations

document.getElementById("ajout").addEventListener("click", function () {


    a = Number(recettes.value);
    b = Number(depenses.value);
    c = Number(epargne.value);



    d = txt_recettes.value;
    e = txt_depenses.value;

// arrondit les valeurs a 2 chiffres apres la virgule

    add = add + a;
    add = Math.round(add*100)/100;

    bdd = bdd + b;
    bdd = Math.round(bdd*100)/100;

    cdd = add - bdd + c;
    cdd = Math.round(cdd*100)/100;


    // affichage des valeurs

    nom_recettes.innerHTML += d +" "+ ":" + " " + a + " "+ "€" + "<br>";
    nom_depenses.innerHTML += e +" "+ ":" + " " + b + " "+ "€" + "<br>";
    affichage_epargne.innerHTML = c + " "+ "€" + "<br>";

    resultat_recettes.innerHTML = add + " " + "€";
    resultat_depenses.innerHTML = bdd + " " + "€";
    resultat_epargne.innerHTML = c + " " + "€";
    resultat.innerHTML = cdd + " " + "€";

blanc();

// conditions d'affichage de l'état du budget

    if (cdd > 0) {
        document.getElementById("bravo").innerHTML = "votre budget est positif";
        document.getElementById("bravo").style.color = "blue"

    }

    if (cdd == 0) {

        document.getElementById("bravo").innerHTML = "votre budget est nul";
        document.getElementById("bravo").style.color = "grey"
    }

    if (cdd < 0) {

        document.getElementById("bravo").innerHTML = "votre budget est négatif";
        document.getElementById("bravo").style.color = "red"
    }
});



// bouton reset

document.getElementById("reset").addEventListener("click", function () {
    reset();
});