function calcul_metric_imc(){

    let taille = document.querySelector("#taille").value
    let poids = document.querySelector("#poids").value
    let imc = (poids / (taille * taille))

    /*document.getElementById("resultat").innerHTML = taille*/
    document.querySelector("#resultat").innerHTML = imc

   
}


function calcul_imperial_imc(){  
    let taille_metre = document.querySelector("#taille").value
    let poids_kg = document.querySelector("#poids").value           
    taille_pouce = taille_metre * 39.3700787 
    poids_livre = poids_kg * 2.2
    imc = (poids_livre / (taille_pouce * taille_pouce)) * 703   
    document.querySelector("#resultat").innerHTML = imc    
}


/*
Taille en mètre x taille en mètre = taille au carré
Poids en kilogrammes ÷ taille au carré = IMC
Par exemple, si vous mesurez 1.70m et que vous pesez 65kg,
 votre IMC sera : 65 ÷ (1.70 x 1.70) = 65 ÷ 2.89 = 22.49.

*/