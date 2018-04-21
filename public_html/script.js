//Exo 2 = affichez 10 fois "Hello world"

//var hello="Hellow World";
//for (var a=0;a<10;a++)
//{
//console.log("Hello world");  
//}


//exo 3 = affichez "Numéro de ligne" + numéro de la ligne

//for (var a=1;a<26;a++){
  //  console.log("Numéro de ligne" + a );
//}

// EXO 4 = Initialisez un tableau de chaine de caractères de longueur 10. Alimentez-le en y insérant le
//texte suivant : « element numeroDeLElement ». Affichez les éléments proprement sur la
//sortie standard.
//Exemple :
//Element 1
//Element 2


//var element = new Array(10);
//for (i=0;i<10;i++){
//    element[i]= (i+1);
//    console.log("element" + element[i]);  
//}


/* Algo tp */

/* exo 1 */

/****Triangle de Pascal*******/ 
//Declaration des variables
var hauteur =   4;
var decalage = hauteur - 1;             // Définition des lignes en fonction "hauteur";
  for(i = 0; i < hauteur; i++){
      var ligne = i;

      var b = i * 2 + 1;                //Nombre de caractères par ligne   

      for(k = 0; k < decalage; k++){    //Ajout de l'espace
          ligne = "-" + ligne;
      }
            for(j = 0; j < b; j++){           //Ajout des étoiles
          ligne = ligne + "*";      
      }                                  
      decalage--;                       //Décrécrémentation
      console.log(ligne);               //Affichage de la pyramide de Pascal
   }
   
   
   /* nouvelle mouture avec les bordures*/
   
var ligne;
var hauteur = 4;
var decalage = hauteur;
var elem = 1;

ligneHorizontale(hauteur);

for(var i=0;i<hauteur;i++){
	ligne = "";
        
//        if (i<1){
//        ligne += "|";
//        i--;
//        }
        
	for(var j=0;j<decalage;j++){
		ligne += "-";
	}
	for(var k = 0;k<elem;k++){
		ligne += "X";
                
//          if (k<9){
//          ligne += "|";
//          }
	}
	console.log(ligne);
	decalage --;
	elem += 2;
}

ligneHorizontale(hauteur);

function ligneHorizontale(hauteur){
	ligne ="";
	for(var i = 0; i<hauteur+4;i++){
		ligne = ligne + "_";
	}
	console.log(ligne);
}

//pour i=0; i<1;1++{        if (i=0){
//ligne += "|";
//
//largueurMax=hauteur+2
//pour i=hauteur+1; i=hauteurMax;i++{
//ligne += "|";
//

var message ="blablabla";
var longueur= length(message);
console.log(message + " : " + longueur);