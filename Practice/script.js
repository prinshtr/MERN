// <!-- 
//         Write a program to calculate factorial of a number using reduce and using for loops


//         6! = 6*5*4*3*2*1

//      -->

// 1. Using reduce



// 2. Using for loop
let num = 6;
let result1 = 1;

function factorial1 (num) {
    for (let i = 1; i <= num; i++) {
        result1 = result1 * i;
            }
        return result1;
} 
    4*3*2*1
    12*2*1
    24*1
    24


console.log(`I am Finel Result ${factorial1(10)}`);

