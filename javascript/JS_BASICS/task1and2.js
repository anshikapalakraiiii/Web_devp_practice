
//TASK 1


const movieName = "The Dark knight";

console.log(movieName.includes("Dark"));
console.log(movieName.indexOf("Knight"));
console.log(movieName.includes("avengers"));
console.log(movieName.slice(0, 8));

//TASK 2


const moviename = "Dangal";
const ticketPrice = 200;
const quantity = 3;
const totalAmount = ticketPrice * quantity;

console.log(`you booked ${quantity} tickets for ${moviename}.`);
console.log(`Total amount :$${totalAmount}`);

