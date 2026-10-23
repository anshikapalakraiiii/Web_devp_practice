//Class Test //

// 1. B 
// 2.  
// 3. D
// 4. B 
// 5. B
// 6. C
// 7. B 
// 8. C

// 9 .console.log("5" + 2);
//console.log("5" - 2);
//console.log(true + 2);
// console.log(Boolean("false"));
//9th answer
//52
//3
//3
//true
//Explanation 
/*
In the first line, "5" + 2 gives 52 because + joins the string and number
. In the second line, "5" - 2 gives 3 because minus converts the string into a number.
 In the third line, true becomes 1, so the answer is 3. 
 In the last line, "false" is a non-empty string, so Boolean gives true.
*/

//10 . 
/*var amount = 100;
function calculate() {
var amount = 200;
let discount = 20;
if (true) {
var amount = 300;
let discount = 50;
console.log(amount, discount);
}
console.log(amount, discount);
}
calculate();
console.log(amount); */
/*10th answer 
300 50
300 20
100*/
//explanation
/*var amount changes to 300 inside the if block because var is function-scoped. 
But let discount = 50 works only inside the if block, so outside it the value remains 20. 
The global amount stays 100 because the function has its own amount variable. */


/* 11.
function calculatePrice(price, quantity) {
 console.log(price * quantity);
}
const result = calculatePrice(100, 3);
console.log(result); */
 /* 
11th answer
300
undefined*/ 
// Explanation
/*The first line prints 300, but the result becomes undefined because the function has no return statement. 
To store the calculated price in result, we need to use return. */

/* 12.
const products = ["Milk", "Bread", "Rice"];
products[1] = "Eggs";
products.push("Oil");
console.log(products);
console.log(products.length);
*/

/* 12 answer
[ 'Milk', 'Eggs', 'Rice', 'Oil' ]
4
PS */
//Explanation
/*First "Bread" is replaced with "Eggs". Then, "Oil" is added at the end using push(). The array has four items.
 We can change array items declared with const, but we cannot reassign the variable to a different array. */

/* 13. 
const employee = {
 name: "Aman",
 salary: 30000,
 showDetails() {
 console.log(this.name, this.salary);
 }
};
employee.showDetails();
*/
// 13 answer Aman 30000
//explanation
/* this refers to the employee object because we call the method using employee.
showDetails(). So it prints the employee's name and salary.*/


/*  14.
function addNumbers(...numbers) {
 return numbers.length;
}
const values = [10, 20, 30, 40];
console.log(addNumbers(values));
console.log(addNumbers(...values)); */

/*  14 answer
Aman 30000
1
4
*/
//explanation
/*In the first call, the complete array is passed as one argument, so the length is 1. 
In the second call, ...values separates the array into four values, so the length is 4. */



//15.
/*let message = "Order placed successfully";
if (true) {
    console.log(message);
}
 OR 
if (true) {
 let message = "Order placed successfully";
 console.log(message);
}

//Explanation

message is declared using let inside the if block.
So we cannot access it outside that block.
I declared it outside the block so it can be printed.
 */

//16. 
/*function calculateCartTotal(...prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }

    return total;
}

console.log(calculateCartTotal(100, 200, 300));

//Explanation
The original  uses i <= prices.length, which makes the loop run one extra time. 
At that point, prices[i] is undefined, so the total becomes NaN. 
I changed <= to < so the loop stops at the last valid index.
*/

//17.
/*const user = {
    userName: "Rahul",

    showName() {
        console.log(this.userName);
    }
};

user.showName();
//explanation

The arrow function does not have its own this, so it may not access userName from the object. 
I used a regular method instead, where this refers to the user object.
Arrow functions are useful for short callbacks, like inside map() or filter().
*/
//18.
/*
console.log([] + []);
console.log([] + {});
console.log("5" - - "2");
console.log(null + 1);
answer
""
[object Object]
7
1
//explanation
1. [ ] + [] gives an empty string because both empty arrays convert to empty strings.
2. [ ] + {} gives "[object Object]" because the empty array becomes "" and the object becomes "[object Object]".
3. "5" - -"2" gives 7 because "5" becomes 5, and -"2" becomes -2. So, 5 - (-2) = 7.
4. null + 1 gives 1 because null converts to 0. So, 0 + 1 = 1.
*/

//19.
/*
console.log(a);
var a = 10;
console.log(b);
let b = 20;

answer
1.console.log(a); executes successfully and prints undefined
2.console.log(b); produces a ReferenceError because b is accessed before its let declaration.
3.Hoisting: JavaScript processes variable declarations before executing the code. 
A var variable is initialized with undefined.

TDZ (Temporal Dead Zone): A let or const variable cannot be accessed before its declaration is initialized. 
Accessing it causes a ReferenceError.
*/

/*
INTERVIEW QUESTIONS!!!!

1. Difference between == and ===?
== compares values after type conversion, while === compares both value and type.

2. Difference between undefined and null?
undefined means a value is not assigned, while null means an intentionally empty value.

3. Difference between for...in and for...of?
for...in iterates over keys, while for...of iterates over values.

4. Can a function return another function? Give an example.
Yes, a function can return another function, such as a function that creates a customized calculator.

5. What happens if a function has no return statement?
It returns undefined by default.

6. Difference between passing primitive values and objects to a function?
Primitive values are passed by value, while objects pass a reference value, allowing their properties to be modified.

7. Difference between shallow copy and deep copy?
A shallow copy shares nested objects, while a deep copy creates separate copies of nested data.

8. Why is NaN !== NaN true?
Because NaN is not equal to any value, including itself.

9. Difference between function declarations and function expressions in hoisting?
Function declarations can be called before their definition, while function expressions depend on how their variables are declared.

10. When should you use an arrow function?
Use arrow functions for short callbacks and when you want this to come from the surrounding context.


*/
 