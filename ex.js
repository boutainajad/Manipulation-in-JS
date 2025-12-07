const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

// // 1. Calculer le produit de tous les nombres :

// // A

// const number = data.reduce((acc , num) => {
//     return acc * num ;
// },1)
// console.log(number);

// // B

// let mul = 1;
// for (let i = 0; i < data.length; i++){
//     mul *= data[i];
// }
// console.log(mul);

// //  2.Trouver la médiane
// // A
// function mediane(data){
// const sorted = [... data].sort((a, b) => a - b);
// const n = sorted.length

// if (n % 2 === 1){
//     return(sorted[Math.floor(n / 2)]);
// }
// const med1 = sorted[n /2 - 1];
// const med2 = sorted[n / 2];
// return ((med1 + med2)/ 2);
// }
// console.log(mediane(data));

// // B 
// function mediane2(data){
//     let sorted =[];
//     for (let i = 0; i < data.length; i++)
//     {
//         sorted[i] = data[i];
//     }
//     for (let i = 0; i < sorted.length; i++)
//     {
//         for (let j = 0; j < sorted.length - 1; j++){
//             if (sorted[j] > sorted[j+1]){ 
//             let temp = sorted[j];
//             sorted[j] = sorted[j + 1];
//             sorted[j + 1] = temp;
//             }
//         }
//     }
//      const n = sorted.length;
//      if (n % 2 ===1){
//         return sorted[((n - 1) / 2)];
//      }
//      else 
//         return (sorted[n / 2 - 1] + sorted [n / 2]) / 2;
//     }
//     console.log(mediane2(data));

// // 3. Générer un tableau cumulatif :
// //  A
//     function cumulatif(data){
//         let some = 0;
//         return data.reduce((result, valeur) =>{
//             some += valeur;
//             result.push(some);
//             return result;
//         }, []);
//     }
//     console.log(cumulatif(data));

// //  B
//     function cumulatif2(data){
//         let some = 0;
//         let result = [];
//         for (let i = 0; i < data.length; i++){
//             some += data[i];
//             result[result.length] = some;
//         }
//         return result;

//     }
//     console.log(cumulatif2(data));


// // 4. Créer un tableau avec les nombres uniques triés
// //  A
// function uniquesTries(data) {
//   const unique = Array.from(new Set(data));
//   return unique.sort((a, b) => a - b);
// }
// console.log(uniquesTries(data));

// // B 

// function uniquesTries2(data) {
//   let unique = [];
  
//   for (let i = 0; i < data.length; i++) {
//     let existe = false;
    
//     for (let j = 0; j < unique.length; j++) {
//       if (data[i] === unique[j]) {
//         existe = true;
//         break; 
//       }
//     }
    
//     if (existe === false) {
//       unique[unique.length] = data[i];
//     }
//   }
  
//   for (let i = 0; i < unique.length; i++) {
//     for (let j = 0; j < unique.length - 1; j++) {
//       if (unique[j] > unique[j + 1]) {
//         let temp = unique[j];
//         unique[j] = unique[j + 1];
//         unique[j + 1] = temp;
//       }
//     }
//   }
  
//   return unique;
// }
// console.log(uniquesTries2(data));


// 5. Regrouper les nombres < 50 et ≥ 50
// A
function regrouper(data) {
  return data.reduce((groupes, nombre) => {
    if (nombre < 50) {
      groupes.petits.push(nombre);
    } else {
      groupes.grands.push(nombre);
    }
    return groupes;
  }, { petits: [], grands: [] });
}
console.log(regrouper(data));


// B
function regrouper2(data) {
  let petits = [];
  let grands = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i] < 50) {
      petits[petits.length] = data[i];
    } else {
      grands[grands.length] = data[i];
    }
  }
  
  return { petits: petits, grands: grands };
}
console.log(regrouper2(data));
