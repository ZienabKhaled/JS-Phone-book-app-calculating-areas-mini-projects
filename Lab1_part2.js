var A =Number(prompt("How many numbers you are entering?"));
// console.log(A);
let i=0;
let array = [];

while(i<A){
    var number = Number(prompt("Please Enter the "+ (i+1) + " number"));
    array.push(number);
    i++;}

console.log(array);


    const sum = array.reduce ((partialsum,value) => partialsum+value ,0);
        console.log("the sum equals to "+sum);

    const avg = sum/ array.length;
    console.log("The avg equals to " + avg);









