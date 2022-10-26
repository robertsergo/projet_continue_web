function calcul_metric_imc(){
    let imc = 0
    let message_erreur = "veillez remplir les champs convénablement svp".toLocaleUpperCase()
    let taille = document.querySelector("#taille").value
    let poids = document.querySelector("#poids").value
    imc = (poids / (taille * taille))

    if (imc <= 0 || taille <= 0 || poids <= 0 ){
        document.querySelector("#resultat1").innerHTML = message_erreur 
    }else{
        document.querySelector("#resultat1").innerHTML = imc       
    }  
   
}


function calcul_imperial_imc(){ 
    let imc = 0 
    let message_erreur = "veillez remplir les champs convénablement svp".toLocaleUpperCase()
    
    let taille = document.querySelector("#taille2").value
    let poids = document.querySelector("#poids2").value
    imc = (poids / (taille * taille))
    if (imc <= 0 || taille <= 0 || poids <= 0 ){
        document.querySelector("#resultat2").innerHTML = message_erreur 
    }else{
        document.querySelector("#resultat2").innerHTML = imc       
    }  
   
     
}


/*
Taille en mètre x taille en mètre = taille au carré
Poids en kilogrammes ÷ taille au carré = IMC
Par exemple, si vous mesurez 1.70m et que vous pesez 65kg,
 votre IMC sera : 65 ÷ (1.70 x 1.70) = 65 ÷ 2.89 = 22.49.

*/