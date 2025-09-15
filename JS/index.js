// console.log("HELLO")
// var a = 20;
// console.log("a=" + a);

// console.log(a);
// var a=20;

// var a=50;
// if(a>10){
//   var a=100;
//   console.log("a="+a);
// }else{
//   console.log("hhhhiiiii")
// }
// console.log("hiii"+a);

// const a=23;
// a=50;

//NORMAL FUNCTION

// function fun(msg){

//   return "Hey..."+msg;
//   console.log("Helllo")
// }

// const data = fun("greeting..");
// console.log(data);

// FUNCTION AS AN EXPRESSION

// const data=function(a,b){
//   return a*b;
// }

// console.log(data(12,5));

// ARROW FUNCTION

// const data=(msg)=>{
//   console.log("Hey.. using arrow function "+msg)
// }
// data("in react development");

// const data=msg=>msg;
// const output = data("Greeting of the day");
// console.log(output);

//IIFE

// (function(){
//   console.log("Welcome to MERN session")
// })();

// setTimeout(()=> {
//   console.log("hiiii")
// },1000);

// function greet(msg="How have you been?"){
//   console.log(msg+" Good");
// }
// greet();
// greet("How are you?");

function selectlanguage(lang="Python"){
  let result;
  if(lang=="java"){
    function javaCompiler(){
      return "Using Java Compiler"
    }

    result = javaCompiler();
  }
  else if(lang=="c"){
    function Ccompiler(){
      return "Using C compiler"
    }

    result=Ccompiler();
  } 
  else if(lang=="Python"){
    function PythonCompiler(){
      return "Using Python compiler"
    }

    result=PythonCompiler();
  }
  else{
    result="No compiler found";
  }
return result;
}

console.log(selectlanguage());
