const nums = [73, 4, 7, 57, 62, "8064"];

console.log(nums);
console.log(typeof nums);

const movies = [
  "the matrix",
  "the matrix reloaded",
  "the matrix revolutions",
  "the matrix 4",
];
console.log("no. of movies =", movies.length);
console.log("your selected movie =", movies[1]);

console.log(movies.at(-2));

console.log("================================================");
//slicing

console.log(movies.slice(1, 3));

//adding elements to array

// at end
console.log("================================================");
movies.push("the matrix 5");

//  at start

movies.unshift("the matrix 0");

console.log(movies);

console.log("====================*****===========================");

//removes element

// from the end

movies.pop();

// from the start

movies.push();


movies.splice(2,2 );  // removes the element from 2nd index and 2 elements
console.log(movies);
 movies.splice(1,1,"the frozen"); // it removes the element at i, j index pos but also adds the 3rd element at i index pos

console.log(movies);

console.log("====================*****===========================");

//spread operator

console.log(...movies);

console.log("====================*****===========================");