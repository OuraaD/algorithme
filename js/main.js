// Un commentaire en JavaScript

/*
Bcp de commentaire, plein de ligne 
plein plein 
plein pleeeein
*/

/* ------------------------- Affichage------------------------------*/

// Afficher des info dans la console du navigateur
// console.log('Hello World, This is me, Life should be')

// Afficher boîte de dialogue avec champs à remplir
// let response = prompt('Quel est votre âge?')
// console.log(response)



/* ------------------------- Affichage------------------------------*/

/* ------------------------- Les variables ------------------------------*/
// Declaration d'une variable
// let uneVariable
// // Affectation d'une variable 
// uneVariable = "Je suis une variable!"
// console.log(uneVariable)

// let hellofriends = "Hello Friends love"

// console.log(hellofriends)

// // Les différents types de variable
// let messages = 'un message'
// let number = 20
// let decimal = 20.5
// let boolean = true
// let boolean2 = false

// // Les opérations arithmétiques (+,-,*,/)
// // Déclarer 3 variables sum, number1, number2
// // Affecter le nombre 10 à number1
// // Affecter le nombre 20 à number2
// // Affecter à sum l'opération de multiplication des 2 variables précédentes

// let sum 
// let number1 = 10
// let number2 = 20
// sum = number1 * number2
// console.log(sum)

/* ------------------------- La Concatenation ------------------------------*/
// let firstName = 'Oura'
// let lastName = 'Diarra'

// Je m'appelle firstName lastName

// console.log("Je m'appelle " + firstName +' '+ lastName)

// // Déclarer une variable city, afficher message j'adore vivre à city
//  let City = 'Plessis Bouchard'
// console.log("J'adore vivre au " + City)

// console.log(`J'adore vivre au ${City}, je m'appelle ${firstName} ${lastName}`)

/* ------------------------- Instrcutions Conditionnelles ------------------------------*/

// Demander à l'utilisateur  s'il accepte les cgv

//   let CGV = prompt("Acceptez-vous les conditions générales de vente ?")
//  console.log(CGV)

//  if(CGV =='Oui'){
//  console.log("Vous avez accepté les conditions")
//  }
// else{
//      console.log("vous avez refusé les conditions")
//  }

// //   Si, Si non Si, Si Non
//  if(CGV =='yes'){
//      console.log("Vous êtes redirigé vers le site en anglais")

//  }else if(CGV =='oui'){
//     console.log('Vous êtes redirigé vers le site en français')

//  }else if(CGV =='da'){
//      console.log('Vous êtes redirigé vers le site en russe')

//  }else{
//      console.log('Vous ne pouvez pas entrer sur le site')
//  }

//  let Nombre = 16

//  if(Nombre>= '16'){
//      console.log('You can drive!')
//  }

/* ------------------------- Les opérateurs de comparaison ------------------------------*/

//  ==, >, >=,<,<=, !=, ===

//  let Age = prompt ('Quel âge avez-vous ?')

//  if(Age <'13'){
//  console.log('Va voir Action Man, minot')
// }else if(Age >= 13 && Age <= 18){
// console.log('Tu peux allé voir Matrix')
//  }else if(Age === '18'){
//  console.log('Tu peux allé voir Matrix')
//  }else if(Age > '18'){
//      console.log('Tu peux allé voir Evil Dead')
//  }else{
//      console.log('Tu es interdit de film à vie gros malin')
//  }


//  let Age = prompt ('Quel âge avez-vous ?')
//  let Pays = prompt ('De quelle nationalité êtes vous ?')

//  if(Pays == 'Français' && Age >=18 || Pays != 'Français' && Age <18  )
//  console.log('Vous pouvez bénéficier de l assistance juridique gratuite')

//  else{
//      console.log('Aucun droit ne vous est attribué')
//  }


// let Pays = prompt ('De quelle nationalité êtes vous ?')


// if(Pays == 'Français'){
//     let Age = prompt('Quelle est ton âge?')
//     if (Age >= 18) {
//         console.log("Vous avez le droit aux APL")
//     } else {
//         console.log("Vous n'avez aucun droit")
//     }

// }else{
//  console.log("Vous n'avez aucun droit")
// }

/* ------------------------- Les boucles ------------------------------*/

//  Les boucles sont des structures permettant d'executer plusieurs fois des instructions
//  Boucle à itération (tour) non définies (while)

// let i = 0

// while(i<11)
// {

// let res = i*7

//     console.log(`${i} x 7 =${res}`)
//     i= i+1

// }

// let A = 12
// let B = 14
// console.log(A, B)
// let C=A
// A=B

// B=C
// console.log(A, B)

//  Déclarer vos revenus

// chaque année mes revenus augmente de 10% grâce à mes placemnts

// Au bout de combien d'années mes revenus dépasseront 30 000e.


// let Revenue = 20000
// let N = 0

// while(Revenue<30000){
//      Revenue = Revenue+Revenue*0.1
//      N = N+1

// console.log(`Il faudra ${N} années, mon revenue sera de ${Revenue}`)
// }

// let Marrakech = 1000000
// let Agadir = 500000
// let N = 0

// while(Agadir<Marrakech){
//     Agadir *= 1.08
//     Marrakech += 50000
//     N=N+1
//     console.log(`Il faudra ${N} années, afin que la population d'Agadir dépasse celle de Marrakech`)
// }

//  Boucle à itération (tour) définies (for)

// for(let i=0; i<11; i++){
// let res = i*7
//     console.log(`${i} x 7 = ${i*7}`)
 
// }

// Algorithme qui fait deviner un chiffre à l'utilisateur

// let devine = 14
// let res = prompt('Devine le chiffre magique')

// while(res != devine){
// if(res <devine){
// res = prompt ("Faux, le chiffre magique est plus grand")}
// else{
// res = prompt('Le nombre magique est plus petit baaah nullos')
//  }
//  }

//  console.log('Yeaaah BLG trop forte')

/* ------------------------- Les fonctions ------------------------------*/

/*

Une fonction est un bloc d'instrcutions réutilisable.
Elle peut prendre des paramètres et renvoyer un résultat
Elle est déclarée avec le mot clé function

*/

// function helloWorld(){
// //     console.log('hello, World!')
// }

// function calculNasa(){
//     let res = 2232423265
//     let essence = 99545423
//     let anneeLumiere = 759845125

//     let solution = res*essence/anneeLumiere**24627

//     return solution
// }

// let solution = calculNasa()


// Ecrire une fonction qui écrit Bonjour le monde !

// function Bonjour(){
//     console.log('Hello')
// }

// Bonjour()

// function HelloYou(name){
//     console.log('Bonjour' + name)
// }

// HelloYou('Oura')



// Écrire une fonction qui calcule la perimètre d'un carré et l'afficher

// function square(x){

//     let resultat = x*4
//     return resultat

// }

// let resSquare = square(23)
// console.log(resSquare)

// Algorithme qui calcule et affiche le carre d'un nombre

// function powerSquared (x){

//     return x**2

// }

// let power = powerSquared(978)
// console.log(power)

//  // Ecrire un algorithme qui affiche les nombres pairs de 0 à 100

// function loop(){

//  console.log(loop)
//  return loop

//  for(let i=0;i<=100;i=i+2){

//       let res = i + 2
//      console.log(i)
//   }

//  }


//  function loop(count,want){

//     for(let i=0;i<=count;i=i+want){
//        console.log(i)
//       }
   
//     }
//   loop(120,4)