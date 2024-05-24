function sum(...numbers) {
  // Start coding here !
  // console.log(numbers);
  let totalNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalNumbers = totalNumbers + numbers[i];
  }
  return totalNumbers;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
