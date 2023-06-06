/* ===== You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0
*/


// InitValue = 0
// Array Loop 
// Check the number is positive or not
// Add the number to the initValue if Positive

// function sumOfPosirive(arr){
//     let initValue = 0;
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             initValue += arr[i];
//         }
//     }
//     return initValue;
// }
// console.log(sumOfPosirive([3,-5,7,5]));

//==Or

function sumOfPosirive(arr){
    return arr.filter((x) => x > 0)
    .reduce((acc, current) => acc + current, 0);
}
console.log(sumOfPosirive([3,-5,7,5]));