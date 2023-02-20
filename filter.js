 const numbers =[ 2,4,12,45,23,66,2,5,66,44,43];
 const smaller = numbers.filter(number => number < 20);
 const bigger = numbers.filter(n => n>20);
 const even = numbers.filter( num => num % 2 === 0);
 console.log(even);
//  console.log(bigger);
//  console.log(smaller);