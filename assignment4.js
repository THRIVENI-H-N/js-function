//1. Create one function with zero parameter having a console statement

const function1 = () => {
    console.log("Hello!!")
}
function1();


//2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

const function2 = (a, b) => {
    let sum = a+b;
    console.log("Sum of " + a + " " + b + " is " + sum);
}
function2();

//3. Create one arrow function

const function3 = () => {
    console.log("This is an arrow function")
}
function3();

//4

console.log("undefined");

// 5

console.log("21");


// 6
console.log("a is not defined, referrance error");

//7. Write a function that accepts parameter n and returns factorial of n

let a = 1;
const function4 = (n) => {
    for(let i=1;i<=n;i++){
        
        a =  a * i ;
    }
    console.log(a);
}
function4(5)
