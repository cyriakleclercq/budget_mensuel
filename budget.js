
//initialisation des variables

var txt_recettes = document.getElementById("txt_recettes");
var recettes = document.getElementById("recettes");
var txt_depenses =  document.getElementById("txt_depenses");
var depenses = document.getElementById("depenses");
var epargne = document.getElementById("epargne");

var resultat_recettes = document.getElementById("resultat_recettes");
var resultat_depenses = document.getElementById("resultat_depenses");
var resultat_epargne = document.getElementById("resultat_epargne");
var resultat = document.getElementById("reste");

var nom_recettes = document.getElementById("txt_rec");
var nom_depenses = document.getElementById("txt_dep");
var resu_ajout = document.getElementById("resu_ajout");
var affichage_epargne = document.getElementById("epa");

var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var ch3 = document.getElementById("ch3");
var ch4 = document.getElementById("ch4");
var ch5 = document.getElementById("ch5");
var ch6 = document.getElementById("ch6");
var ch7 = document.getElementById("ch7");
var ch8 = document.getElementById("ch8");
var ch9 = document.getElementById("ch9");
var ch10 = document.getElementById("ch10");
var resultat_charges = document.getElementById("resultat_charges");

// mise à 0 des inputs

recettes.value = 0;
depenses.value = 0;
epargne.value = 0;

ch1.value = 0;
ch2.value = 0;
ch3.value = 0;
ch4.value = 0;
ch5.value = 0;
ch6.value = 0;
ch7.value = 0;
ch8.value = 0;
ch9.value = 0;
ch10.value = 0;

// initialisation des variables d'entrée

var a = 0;
var b = 0;
var c = 0;
var d = "";
var e = "";

var aa = 0;
var bb = 0;
var cc = 0;
var dd = 0;
var ee = 0;
var ff = 0;
var gg = 0;
var hh = 0;
var ii = 0;
var jj = 0;

// initialisation des variables de calcul

var add = 0;
var bdd = 0;
var cdd = 0;
var ddd = 0;
var edd = 0;

// vide des inputs

function blanc() {

    recettes.value = "0";
    depenses.value = "0";
    epargne.value = "0";

    txt_recettes.value = "";
    txt_depenses.value = "";

    ch1.value = "0";
    ch2.value = "0";
    ch3.value = "0";
    ch4.value = "0";
    ch5.value = "0";
    ch6.value = "0";
    ch7.value = "0";
    ch8.value = "0";
    ch9.value = "0";
    ch10.value = "0";

}

//reset de toutes les variables

function reset() {

    recettes.value = "0";
    depenses.value = "0";
    epargne.value = "0";

    add = 0;
    bdd = 0;
    cdd = 0;
    ddd = 0;
    edd = 0;

    txt_recettes.value = "";
    txt_depenses.value = "";

    nom_recettes.innerHTML = "";
    nom_depenses.innerHTML = "";
    affichage_epargne.innerHTML = "";
    resultat_recettes.innerHTML = "";
    resultat_depenses.innerHTML = "";
    resultat_epargne.innerHTML = "";
    resultat.innerHTML = "";
    resultat_charges.innerHTML = "";
    resu_ajout.innerHTML = "";

    document.getElementById("bravo").innerHTML = "";
}


// mise en action des opérations

document.getElementById("ajout").addEventListener("click", function () {


    a = Number(recettes.value);
    b = Number(depenses.value);
    c = Number(epargne.value);


    d = txt_recettes.value;
    e = txt_depenses.value;


    aa = Number(ch1.value);
    bb = Number(ch2.value);
    cc = Number(ch3.value);
    dd = Number(ch4.value);
    ee = Number(ch5.value);
    ff = Number(ch6.value);
    gg = Number(ch7.value);
    hh = Number(ch8.value);
    ii = Number(ch9.value);
    jj = Number(ch10.value);

// arrondit les valeurs a 2 chiffres apres la virgule


    ddd = aa + bb + cc + dd + ee + ff + gg + hh + ii + jj;
    ddd = Math.round(ddd*100)/100;

    add = add + a;
    add = Math.round(add*100)/100;

    bdd = bdd + b + ddd;
    bdd = Math.round(bdd*100)/100;

    cdd = add - bdd - c;
    cdd = Math.round(cdd*100)/100;

    edd = bdd + b;
    edd = Math.round(bdd*100)/100;


    // affichage des valeurs


    nom_recettes.innerHTML += d +" "+ ":" + " " + a + " "+ "€" + "<br>";
    nom_depenses.innerHTML += e +" "+ ":" + " " + b + " "+ "€" + "<br>";
    affichage_epargne.innerHTML = c + " "+ "€" + "<br>";


    resultat_charges.innerHTML = ddd + " " + "€";
    resultat_recettes.innerHTML = add + " " + "€";
    resultat_depenses.innerHTML = bdd + " " + "€";
    resultat_epargne.innerHTML = c + " " + "€";
    resultat.innerHTML = cdd + " " + "€";
    resu_ajout.innerHTML = edd + " " + "€";

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