function addNums(a,b){
    c=a+b;
    console.log(c);
};

addNums(10,20);

const fact=function(a){
    let f=1;
    for(let i=1;i<=a;i++){
        f=f*i;
    };
    console.log(f);
};


fact(5);

// percentage of four subject marks
const calcPercent = (m1,m2,m3,m4) => {
    const total = m1+m2+m3+m4;
    const percentage = total/4 ;
return percentage;
}



console.log(calcPercent(45,67,37,89) ,"%");