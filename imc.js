function calculer_imc(){

    taille = document.querySelector("#taille")
    poids = document.querySelector("#poids")
    imc = ((taille * taille) / poids)

    document.getElementById("resultat").innerHTML = taille
    document.querySelector("#resultat").innerHTML = taille

   
}


function ma_fonction(){    
    let taille = 1.8   
    let poids = 75
    let imc = poids/(taille*taille)
    //document.write("imc = "+imc) 
    document.querySelector("#resultat").innerHTML = taille
    document.getElementById('resultat').innerHTML = poids;
    
}


/*
Taille en mètre x taille en mètre = taille au carré
Poids en kilogrammes ÷ taille au carré = IMC
Par exemple, si vous mesurez 1.70m et que vous pesez 65kg,
 votre IMC sera : 65 ÷ (1.70 x 1.70) = 65 ÷ 2.89 = 22.49.

*/