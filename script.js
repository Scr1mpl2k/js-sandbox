//
const fruits = ['apple', 'banana', 'melon', 'orange'];
const hasOrange = search(fruits, 'orange');
function search(a, b) { 
    const  searchA = a.includes(b);
    return(searchA);
}

const cars = ['BMW', 'Nissan', 'VW', 'Skoda', 'Audi', 'Kia'];
const favoriteCars = cars.slice(0 , 3);
const otherCars = cars.slice(3);
console.log(favoriteCars);
console.log(otherCars);
console.log('nice');