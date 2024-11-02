// JS basics
/*for(let i = 1 ; i<=10; i= i+1){
    console.log("Karan" + i)
}*/
/*const str = "karan gope";
console.log(str.length);*/

/*function sum(a,b){
    return (a+b);
}
const finalSum = sum(9,1);
console.log(finalSum);*/
/*const value = "KARAN GOPE";
let ans = value.slice(0,5)
console.log(ans);*/
/*const str = "KARAN GOPE";
console.log(str.replace("GOPE","ROY"));*/
/*const aary1 = [1,2,3];
const arry2 = [4,5,6];
const finalarray = aary1.concat(arry2);
console.log(finalarray);*/

  /*const initialArray = [1,2,3];
  function logThing(str){
    console.log(str + " is the string");
  }
  initialArray.forEach(logThing);*/

  // classes : )
 /*class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak(){
        console.log("hii there" +" "+ this.speaks);
    }
  }
  let dog = new Animal("dog", 4 , "bhow");
  dog.speak();*/

  /*const currentDate = new Date();
  console.log(currentDate.getDate());
  console.log(currentDate.getFullYear());*/

  /*const user = {
    name : "karan",
    gender : "male"
  }
  const finalString = JSON.stringify(user)
  console.log(finalString)*/
  
  /*let ans = 0;
  for(let i = 0; i<= 10; i++){
    ans = ans + i;
  }
  console.log(ans);*/
  /*function finalSum(n){
    let ans = 0;
    for(let i = 1; i<n; i++){
      ans = ans + i
    }
    return ans;
  }
  let ans = finalSum(10)
  console.log(ans);*/

  /*function square(n){
    return n * n 
  }
  function sumofSquares(a,b){
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
  }
  console.log(sumofSquares(1,2));*/

 /* // callback Function
  function square(n){
return n * n 
  }
  function sumofSomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
  }
  console.log(sumofSomething(1,4,square));*/

  /*function calculateSum(){
    let a = 1;
    for(let i = 1; i<10; i++){
      a = a + 1;
    }
    console.log(a);
  }
  calculateSum();*/

 /*function karanAsyncFunction(){
  let p = new Promise(function(resolve){
    setTimeout(function(){
      resolve("BCREC")
    },5000)
  });
  return p;
 } 
   
 async function name(params) {
    let value = await karanAsyncFunction()
    console.log(value);
  }
  name();*/

  
/*const sayHello = () => {
  console.log("hello");
};
sayHello();*/

/*const add = (a,b) => {
  return a + b ;
};
console.log(add(4,3));*/

// one liner function
/*const addSum = ( a, b) => a+b;
console.log(addSum(2,5));*/

// argument keyword 
/*const addNumbers = (...nums) => {
  console.log(nums);
};
addNumbers(10,20,30,40,50);*/

// High Oredr and Callbacks 
// --> A function that takes a function as an argument.

// Array
/*const student = ["ram" , "sam", "Jodu" , "Madhu"];
student[3] = "Karan";// atar dara index er value change kora jai.
console.log(student);
console.log(student.length);*/

/*const student = ["ram" , "sam", "Jodu" , "Madhu"];
student.reverse();
student.push("Karan");
student.pop();
console.log(student);*/

/*function karanAsyncFunction(){
  let p = new Promise(function(resolve){
    resolve("hi there")
  });
  return p;
}
async function main(){
  const value = await karanAsyncFunction();
  console.log(value);
}
main();*/



