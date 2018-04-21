//initialisation de la variable message
var message = "binome";
//initialisation de la variable longueur qui call la fonction length qui prend pour argument "message"
var longueur = length(message);
//initialisation de la variable inversion qui prend pour valeur longueur - 1  pour éviter que console log affiche "undefined"
//car le premier index est 0 si il n'y a pas le -1 les index seront : 6 5 4 3 2 1 0, donc 7 index au lieu de 6
var inversion = longueur - 1; 
//initialisation de la variable de stockage du message inversé
var messageInvers = "";

//boucle, pour inversion est plus grand ou égal à 0 on décremente la variable inversion
for(inversion; inversion >= 0; inversion--){
//on ajoute les carac à la variable en commençant par le dernière index du tableau message grâce à la valeur de la variable inversion
    messageInvers = messageInvers + message[inversion];
    console.log(inversion)

}
    console.log(messageInvers);