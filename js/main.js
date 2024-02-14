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
let uneVariable
// Affectation d'une variable 
uneVariable = "Je suis une variable!"
console.log(uneVariable)

let hellofriends = "Hello Friends love"

console.log(hellofriends)

// Les différents types de variable
let messages = 'un message'
let number = 20
let decimal = 20.5
let boolean = true
let boolean2 = false

// Les opérations arithmétiques (+,-,*,/)
// Déclarer 3 variables sum, number1, number2
// Affecter le nombre 10 à number1
// Affecter le nombre 20 à number2
// Affecter à sum l'opération de multiplication des 2 variables précédentes

let sum 
let number1 = 10
let number2 = 20
sum = number1 * number2
console.log(sum)

/* ------------------------- La Concatenation ------------------------------*/
let firstName = 'Oura'
let lastName = 'Diarra'

// Je m'appelle firstName lastName

console.log("Je m'appelle " + firstName +' '+ lastName)

// Déclarer une variable city, afficher message j'adore vivre à city
 let City = 'Plessis Bouchard'
console.log("J'adore vivre au " + City)

console.log(`J'adore vivre au ${City}, je m'appelle ${firstName} ${lastName}`)

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

let A = 12
let B = 14
console.log(A, B)
let C=A
A=B

B=C
console.log(A, B)

