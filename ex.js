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

// 3. Générer un tableau cumulatif :
//  A
    function cumulatif(data){
        let some = 0;
        return data.reduce((result, valeur) =>{
            some += valeur;
            result.push(some);
            return result;
        }, []);
    }
    console.log(cumulatif(data));

//  B
    function cumulatif2(data){
        let some = 0;
        let result = [];
        for (let i = 0; i < data.length; i++){
            some += data[i];
            result[result.length] = some;
        }
        return result;

    }
    console.log(cumulatif2(data));


// 4. Créer un tableau avec les nombres uniques triés
//  A
function uniquesTries(data) {
  const unique = Array.from(new Set(data));
  return unique.sort((a, b) => a - b);
}
console.log(uniquesTries(data));

// B 

function uniquesTries2(data) {
  let unique = [];
  
  for (let i = 0; i < data.length; i++) {
    let existe = false;
    
    for (let j = 0; j < unique.length; j++) {
      if (data[i] === unique[j]) {
        existe = true;
        break; 
      }
    }
    
    if (existe === false) {
      unique[unique.length] = data[i];
    }
  }
  
  for (let i = 0; i < unique.length; i++) {
    for (let j = 0; j < unique.length - 1; j++) {
      if (unique[j] > unique[j + 1]) {
        let temp = unique[j];
        unique[j] = unique[j + 1];
        unique[j + 1] = temp;
      }
    }
  }
  
  return unique;
}
console.log(uniquesTries2(data));


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

// 6. Trouver les 3 plus grands nombres

// A 
function top3v1(data) {
  const sorted = [...data].sort((a, b) => b - a);
  
  return sorted.slice(0, 3);
}
console.log(top3v1(data))

// B 
function top3v2(data) {
  let copie = [];
  for (let i = 0; i < data.length; i++) {
    copie[i] = data[i];
  }
  
  for (let i = 0; i < copie.length; i++) {
    for (let j = 0; j < copie.length - 1; j++) {
      if (copie[j] < copie[j + 1]) {  
        let temp = copie[j];
        copie[j] = copie[j + 1];
        copie[j + 1] = temp;
      }
    }
  }
  
  let top3 = [];
  for (let i = 0; i < 3; i++) {
    top3[i] = copie[i];
  }
  
  return top3;
}
console.log(top3v2(data))


// 7. Trouver les 3 plus petits nombres
// A 
function bottom3v1(data) {
  const sorted = [...data].sort((a, b) => a - b);
  
  return sorted.slice(0, 3);
}
console.log(bottom3v2(data))

// B 
function bottom3v2(data) {
  let copie = [];
  for (let i = 0; i < data.length; i++) {
    copie[i] = data[i];
  }
  
  for (let i = 0; i < copie.length; i++) {
    for (let j = 0; j < copie.length - 1; j++) {
      if (copie[j] > copie[j + 1]) {  

        let temp = copie[j];
        copie[j] = copie[j + 1];
        copie[j + 1] = temp;
      }
    }
  }
  
  let bottom3 = [];
  for (let i = 0; i < 3; i++) {
    bottom3[i] = copie[i];
  }
  
  return bottom3;
}
console.log(bottom3v2(data))


// 8. Créer un mapping :

// A
function mapping(data) {
  return data.reduce((resultat, nombre) => {
    if (nombre % 2 === 0) {
      resultat.even.push(nombre);
    } else {
      resultat.odd.push(nombre);
    }
    resultat.total++;
    return resultat;
  }, { even: [], odd: [], total: 0 });
}
console.log(mapping(data))
// B
function mappingAvecBoucle(data) {
  let even = [];
  let odd = [];
  let total = 0;
  
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      even[even.length] = data[i];
    } else {
      odd[odd.length] = data[i];
    }
    total++;
  }
  
  return { even: even, odd: odd, total: total };
}
console.log(mapping(data))

// 9. Générer un tableau contenant les nombres multipliés par leur index
// A

function multiplier(data) {
  return data.map((valeur, index) => valeur * index);
}
console.log(multiplier(data))
// B 

function multiplier(data) {
  let resultat = [];
  
  for (let i = 0; i < data.length; i++) {
    resultat[i] = data[i] * i;
  }
  
  return resultat;
}
console.log(multiplier(data))


// 10. Remplacer les valeurs < 10 par 0
// A 
function remplacer(data) {
    data.map(valeur => {
      if (valeur < 10) {
        return 0;
      } else {
        return valeur;
      }
    })
}
console.log(remplacer(data))
// B 
function remplacer(data) {
  let resultat = [];
  
  for (let i = 0; i < data.length; i++) {
    if (data[i] < 10) {
      resultat[i] = 0;
    } else {
      resultat[i] = data[i];
    }
  }
  
  return resultat;
}
console.log(remplacer(data))

// 11. Diviser le tableau en groupes de taille 4
// A 
function diviser1(data) {
  let groupes = [];
  
  for (let i = 0; i < data.length; i += 4) {
    groupes[groupes.length] = data.slice(i, i + 4);
  }
  
  return groupes;
}

console.log(diviser1(data))
// b 
function diviser2(data) {
  let groupes = [];
  let groupeActuel = [];
  
  for (let i = 0; i < data.length; i++) {
    groupeActuel[groupeActuel.length] = data[i];
    
    if (groupeActuel.length === 4 || i === data.length - 1) {
      groupes[groupes.length] = groupeActuel;
      groupeActuel = [];  
    }
  }
  
  return groupes;
}
console.log(diviser2(data))

// 12. Créer une fonction qui retourne :

// A 
function calcu(data) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const somme = data.reduce((a, b) => a + b, 0);
  const count = data.length;
  const moyenne = somme / count;

  return { max, min, somme, moyenne, count };
}

console.log(calcu(data));
// B 
function calcu2(arr) {
  let max = data[0];
  let min = data[0];
  let somme = 0;
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    const val = data[i];

    somme += val;

    count++;

    if (val > max) {
      max = val;
    }

    if (val < min) {
      min = val;
    }
  }

  const moyenne = somme / count;

  return { max, min, somme, moyenne, count };
}

console.log(calcu2(data));

