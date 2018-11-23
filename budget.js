
var txt_recettes = document.getElementById("txt_recettes");
var recettes = document.getElementById("recettes");
var txt_depenses =  document.getElementById("txt_depenses");
var depenses = document.getElementById("depenses");
var epargne = document.getElementById("epargne");

var resultat_recettes = document.getElementById("resultat_recettes");
var resultat_depenses = document.getElementById("resultat_depenses");
var rsultat = document.getElementById("resultat");

var nom_recettes = document.getElementById("txt_rec");
var nom_depenses = document.getElementById("txt_dep");

var affichage_recettes = document.getElementById("rec");
var affichage_depenses = document.getElementById("dep");
var affichage_epargne = document.getElementById("epa");

var tableau_recettes = [];
var tableau_depenses = [];
var tableau_epargne = [];

recettes.value = 0;
depenses.value = 0;
epargne.value = 0;

var a = 0;
var b = 0;
var c = 0;
var d = "";
var e = "";

document.getElementById("ajout").addEventListener("click", function () {

    a = recettes.value;
    b = depenses.value;
    c = epargne.value;

    d = txt_recettes.value;
    e = txt_depenses.value;

    affichage_recettes.innerHTML = a;
    affichage_depenses.innerHTML = b;
    affichage_epargne.innerHTML = c;

    nom_recettes.innerHTML = d +" "+ ":";
    nom_depenses.innerHTML = e +" "+ ":";


    tableau_recettes.push(a);
    console.log(tableau_recettes);

    tableau_depenses.push(b);
    console.log(tableau_depenses);

    tableau_epargne.push(c);
    console.log(tableau_epargne);


});