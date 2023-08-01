let user = {
  name: "John",
  email: "john@example.com",
  age: 21,
};

let smartphone = {
  brand: "Samsung",
  model: "s23",
  price: 6099,
  colors: ["black", "white"],
  features: {
    cpu: "sd 256",
    ram: "8gb",
    storage: "128gb",
  },
};

// syntax to access second color from smartphone

console.log(smartphone.colors[1]);

smartphone.colors[2] = "red";
console.log(smartphone.colors);

smartphone.features.cpu = "sd 880";

console.log(smartphone.features);

console.log("================================================");

let phones = [
  {
    brand: "iphone",
    model: "14 plus",
    price: 120000,
    colors: ["black", "white", "purple", "red"],
  },
  {
    brand: "Nothing",
    model: "one",
    price: 3500,
    colors: ["black", "white"],
  },
  {
    brand: "samsung",
    model: "s 22 ultra",
    price: 110000,
    colors: ["black", "white", "silver", "gold"],
  },
];

// 1. change the price of 1st phone to 35000

phones[0].price = 3500;
console.log(phones[0]);

console.log("================================================");

// 2. add a new colors to last 2nd phone

phones.at(-2).colors.push("ocean blue");
console.log(phones[1]);

console.log("================================================");
// 3. use q for loop to count the number  of phones which have price less than 50000

let count = 0;
for (let i of phones) {
  if (i.price < 50000) {
    count++;
  }
}

console.log(count);
console.log("================================================");

// use map get an array of all the brand of smartpones

console.log(phones.map((i) => i.brand));
console.log("4");

console.log("================================================");
// use fiter to get an array all brands which have color black

console.log(
  phones.filter((j) => {
    if (j.colors.includes("black")) {
      return j.brand;
    }
  })
);
