//initialisation variable message
var message = "binome";

//inialisation variable longueur qui call la fonction length qui a pour argument "message"
var longueur = length(message);
console.log(longueur);

//initialisation variable messageDup qui a pour but de stocker le message traité par la boucle
var messageDup = "";

//boucle, pour i plus petit que la longueur du message incrémentation de i (index)
for(var i = 0; i < longueur; i++){
    
    //On dit que messageDup est égal à lui même plus deux fois l'index en cours de la variable message
    messageDup = messageDup + message[i] + message[i];
}
console.log(messageDup);