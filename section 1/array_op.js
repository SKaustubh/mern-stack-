const nums= [1,4,5,6,7,8,9,10];

// program to sq each elemnt of array without using loop

// nums.map( (i) => {
//     console.log(i ** 2);
// })


const res=nums.map( (i) => {
    return i ** 2;
});

console.log(res);


// program to divide each element of array by 2

const res1=nums.map( (i) => { return i / 2; });

console.log(res1);

console.log("===================*************========================");

const prices=['$12.55','$15.56','$20.87','$25.98','$30.23'];
// program to remove $ sign from prices array into  integer array

const res2=prices.map( (i) => {
    return parseInt(i.slice(1));
});

console.log(res2);

console.log("===================*************========================");

// program using map function to divide even element of an array by 2 and multiply odd element by 3

const res3=nums.map( (i) => { return(i % 2 == 0) ? i / 2 : i * 3; });

console.log(res3);

// program using map function to divide even position element of an array by 2 and multiply odd position element by 3

const res4=nums.map( (i,index) => { return(index % 2 == 0) ? i / 2 : i * 3; });

console.log(res4);


// filter function

// in filter function we have to return true or false { it means we  have to return boolean value and conditions }

// program to filter even element from array

const res5=nums.filter( (i) => { return i % 2 == 0; });

console.log(res5);

console.log("===================*************========================");
// prgram to filter out prices greater than 500

const price=[178,9753,6748,456,390,789,583,11]

const res6=price.filter( (i) => { return i > 500; });

console.log(res6);

// program to filter out price which is not a perfect square

const res7=price.filter( (i) => { return Math.sqrt(i) % 1 !=0;});
 

console.log("perfect sq=",res7);

console.log("===================*************========================");

// program to filter out price which is  a perfect square 

const res8=price.filter( (i) => { return Math.sqrt(i) % 1 ==0;});

console.log(res8);
console.log("===================*************========================");

// program to filter out price which is prime number

const res9=price.filter( (i) => { 
    for(let j=2;j<i;j++){
        if(i % j == 0){
            return false;
        }
    }
    return true;
});

console.log(res9);
