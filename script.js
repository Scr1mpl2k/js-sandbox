const numbers = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++) {
    i % 2 === 0 ? numbers[i] = numbers[i] + 3 : null;
}
console.log(numbers);