function calcul_metric_imc(){
    let imc = 0    
    let message_erreur = "<h2 style='color:red'>veillez remplir les champs convénablement svp.</h2>".toLocaleUpperCase(); 
    let taille = document.querySelector("#taille").value
    let poids = document.querySelector("#poids").value
    imc = (poids / (taille * taille))
    imc = Math.round(imc * 100) / 100
    if (imc <= 0 || taille <= 0 || poids <= 0 ){
        document.querySelector("#resultat1").innerHTML = message_erreur 
    }else{
        document.querySelector("#resultat1").innerHTML = imc       
    }    
}


function calcul_imperial_imc(){ 
    let imc = 0 
    let message_erreur = "<h2 style='color:red'>veillez remplir les champs convénablement svp.</h2>".toLocaleUpperCase();     
    let taille = document.querySelector("#taille2").value
    let poids = document.querySelector("#poids2").value    
    imc = poids / (taille * taille) * 703.07
    imc = Math.round(imc * 100) / 100
    if (imc <= 0 || taille <= 0 || poids <= 0 ){
        document.querySelector("#resultat2").innerHTML = message_erreur 
    }else{
        document.querySelector("#resultat2").innerHTML = imc       
    }  
}