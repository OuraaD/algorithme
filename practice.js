// ---------------------------------- Partie 1 ----------------------------------

// Afficher un message de bienvenue dans la console
// 'Bonjour, je suis un message affiché dans la console'

console.log("Bonjour, je suis un message affiché dans la console");

// Creer une variable qui contient un message de bienvenue
// 'Bonjour, je suis une variable qui contient un message de bienvenue'
// Afficher la variable de bienvenue dans la console

let salut =
  "Bonjour, je suis une variable qui contient un message de bienvenue";
console.log(salut);

// Quelle sera la valeur de i à la fin de cet algorithme ?
let g = 12;
let h = 2;
let i = g * h;

i = g * h;
console.log(`La valeur de i à la fin de cet algorithme est ${i}`);

// Creer une variable qui contient un message
// 'Je decouvre le javascript'
// Concatener la variable avec le message 'et je suis très heureux de tout ce que j'apprend
// Et afficher le resultat dans la console

let message = "Je découvre le javascript";
console.log(`${message} et je suis très heureuse de tout ce que j'apprend`);

// Creer une variable qui contient votre prenom
// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'

let firstName = "Oura";
console.log(`Bonjour, je m'appelle ${firstName}`);

// Afficher le message avec les 3 facons de faire une concaténation ('', "", ``)

console.log(`Bonjour, je m'appelle ${firstName}`);
console.log("Bonjour, je m'appelle" + firstName);
console.log("Bonjour, je m'appelle" + firstName);

// Algorithme de calcul de moyenne
// Déclarer 3 variables qui contiennent les notes de l'utilisateur
// Calculer la moyenne de l'utilisateur

let math = 9;
let anglais = 15;
let ses = 12;
let moyenne = (math + anglais + ses) / 3;

console.log(moyenne);

// ---------------------------------- Partie 2 ----------------------------------

// Creer une fonction qui affiche un message de bienvenue dans la console
// 'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
// Appeler la fonction

function helloWorld() {
  console.log(
    "Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console"
  );
}

helloWorld();

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom
// 'Bonjour XXXX, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
// Appeler la fonction en lui passant votre prenom en parametre

function welcome(me) {
  console.log(
    `Bonjour${me}, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre `
  );
}

welcome("Oura");

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom et un age
// 'Bonjour XXXX, vous avez XXXX ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'
// Appeler la fonction en lui passant votre prenom et votre age en parametre

function welcome(me, age) {
  console.log(
    `Bonjour ${me}, vous avez ${age} ans je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre `
  );
}

welcome("Oura", 23);

// ---------------------------------- Partie 3 ----------------------------------

// Déclarer une variable qui contient votre age
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
// Sinon afficher dans la console 'Vous êtes mineur'

let age = 23;

if (age >= 18) {
  console.log("Vous êtes majeur");
} else {
  console.log("Vous êtes mineur");
}

// Déclarer une fonction qui prend en parametre un age
// Et qui affiche dans la console si l'utilisateur est majeur ou mineur

// Transformer la fonction pour retourner true si l'utilisateur est majeur et false sinon

function Age(x) {

    
  console.log();

  ;
}

Age(28)

// Décider de l'animal préféré de l'utilisateur en fonction de son choix
// Demander à l'utilisateur de rentrer un animal
//     Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
//     Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
//     Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
//     Sinon => je ne connais pas cet animal

let animals = prompt ("Rentrez le nom d'un animal")

if(animals == 'chat'|| animals == 'chien'){
    console.log('Vous aimez les animaux domestiques !')

}else if(animals =='lion'|| animals =='tigre'){
console.log("Vous aimez les animaux sauvages !")

}else if(animals == 'dauphin'|| animals == 'otarie'){
console.log("Vous aimez les animaux marins !")

}else{
    console.log("je ne connais pas cet animal")
}




// Transformer l'exercice en fonction qui prend en parametre un animal et qui retourne le message correspondantChat