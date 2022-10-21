function calculer_imc(){
    taille = document.querySelector("#taille")
    poids = document.querySelector("#poids")
    imc = ((taille * taille) / poids)

    document.getElementById("resultat").innerHTML = imc

    return imc
}


/*
Taille en mètre x taille en mètre = taille au carré
Poids en kilogrammes ÷ taille au carré = IMC
Par exemple, si vous mesurez 1.70m et que vous pesez 65kg,
 votre IMC sera : 65 ÷ (1.70 x 1.70) = 65 ÷ 2.89 = 22.49.

*/