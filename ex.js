const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

// 1. Calculer le produit de tous les nombres :

// A

const number = data.reduce((acc , num) => {
    return acc * num ;
},1)
console.log(number);

// B

let mul = 1;
for (let i = 0; i < data.length; i++){
    mul *= data[i];
}
console.log(mul);