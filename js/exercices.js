 
// /* ---------------------------------------------------------------

//                             LES TABLEAUX 

//  -----------------------------------------------------------------*/

//  /*
//  Un tableau (array) est un type de donnée qui peut contenir plusieurs élements.
//  On petut créer un tableau en utilisant des crochets[] et en y insérant les éléments séparés par des virgules.
//  */

//   let sunday = 'dimanche'
//   let week = [
//      "lundi, ",
//      "mardi",
//      "mercredi",
//      "jeudi",
//       "vendredi",
//       "samedi",
//       sunday,
//       ['Oura', 'Selma', 'Nadjila'],
//  ];

// console.log(week[7])

// // tableau animals
// // 6 animaux dedans, afficher le premier et le dernier élément

//  let animals = [
//      "Lion",
//     "Guépard",
//      "Panthère",
//      "Chat",
//       "Tigre",
//      "Jaguar",

//   ]

//  console.log(animals[0],animals[5])


// for(let i=0;i<6;i++){
//  console.log(animals[i])
//  }


// function displayArray(array){

//    for(let i=0;i<array.length;i++){
//       console.log(array[i])

//    }
// }

// displayArray(animals)
// displayArray(week)

// // //  On peut accéder à un élément du tableau en utilisant son index numérique(indice)
// // // l'index du premier est toujours 0.
// // console.log(week[0])

// // // Pour modifier la valeur d'un élément d'un tableau, je précise l'indice
// // week[6] = 'test'
// // console.log(week)

// // // Pour connaitre la longueur d'un tableau nous pouvons utiliser la propriété .lenght
// // console.log(week.lenght)

// // Les tableaux peuvent contenir d'autres tableaux

// let notes = [
//    [12,16,19]
//    [9,5,4]
//    [12,24,45]
// ]

// // Pour accéder à une note
// console.log(note[1])