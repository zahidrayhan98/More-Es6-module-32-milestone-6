
const numbers = [23, 34, 12, 45, 56];
// const output =[];
// for ( const number of numbers){
//     const doubled = number *2 ;
//     output.push(doubled);
// }
// console.log(output);


function getDoubled(numbers) {
    const output = [];
    for (const number of numbers) {
        // const doubled = doubleOconst out
        for ( const number of numbers){
            const doubled = number *2 ;
            output.push(doubled);
        }
        // console.log(output);
        // output.push(doubled);
    }
    return output;
}
 function doubleIt (num){
    return num * 2 ;
 }
 

 const doubleOld = num => num * 2;
///// map function use////

const makeDouble = numbers.map(doubleIt);
 const makeDouble1 =numbers.map(x => x *2);
const makeDouble2 =[2,3,44,2,7,8,98].map(x => x *2);
console.log(makeDouble2);

// console.log(makeDouble);
// console.log(makeDouble1);

const result =getDoubled(numbers);
// console.log(result);