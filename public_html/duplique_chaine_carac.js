//initialisation chaine de carac "message"
var message ="binome";

//initialisation variable longueur qui call la fonction length avec "message" comme argument
var longueur=length(message);


console.log(longueur);
//boucle: pour i plus petit que longueur incrémentation (i = index pour se déplacer dans le tableau de carac)


for (var i=0;i<longueur;i++){
    //console log pour afficher un caractere par passage de la boucle pour avoir 1 carac par ligne
    console.log(message[i]);
    
}



