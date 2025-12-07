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

//  2.Trouver la médiane
// A
function mediane(data){
const sorted = [... data].sort((a, b) => a - b);
const n = sorted.length

if (n % 2 === 1){
    return(sorted[Math.floor(n / 2)]);
}
const med1 = sorted[n /2 - 1];
const med2 = sorted[n / 2];
return ((med1 + med2)/ 2);
}
console.log(mediane(data));

// B 
function mediane2(data){
    let sorted =[];
    for (let i = 0; i < data.length; i++)
    {
        sorted[i] = data[i];
    }
    for (let i = 0; i < sorted.length; i++)
    {
        for (let j = 0; j < sorted.length - 1; j++){
            if (sorted[j] > sorted[j+1]){ 
            let temp = sorted[j];
            sorted[j] = sorted[j + 1];
            sorted[j + 1] = temp;
            }
        }
    }
     const n = sorted.length;
     if (n % 2 ===1){
        return sorted[((n - 1) / 2)];
     }
     else 
        return (sorted[n / 2 - 1] + sorted [n / 2]) / 2;
    }
    console.log(mediane2(data));