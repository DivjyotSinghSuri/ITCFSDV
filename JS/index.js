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

// function selectlanguage(lang="Python"){
//   let result;
//   if(lang=="java"){
//     function javaCompiler(){
//       return "Using Java Compiler"
//     }

//     result = javaCompiler();
//   }
//   else if(lang=="c"){
//     function Ccompiler(){
//       return "Using C compiler"
//     }

//     result=Ccompiler();
//   } 
//   else if(lang=="Python"){
//     function PythonCompiler(){
//       return "Using Python compiler"
//     }

//     result=PythonCompiler();
//   }
//   else{
//     result="No compiler found";
//   }
// return result;
// }

// console.log(selectlanguage());


// const div=document.getElementsByTagName("div");

// div[0].innerText="Hello";
// div[0].style.color='red';
// div[0]. style.backgroundColor='green';
// console.log(div);

const container = document.getElementsByClassName("container");

// container[0].innerHTML="<h2 style.color:'red'> Hello </h2>"
// console.dir(container);

const h2 = document.createElement('h2');
h2.innerText = "ABES ENGINEERING COLLEGE";
h2.style.color = "maroon";
h2.style.backgroundColor = "yellow";
console.log(h2);
container[0].appendChild(h2);


const button = document.getElementById('btn');
console.log(button);

document.getElementById('disp').innerHTML = "<h4>loading image...</h4>";

function msg() {
  const h3 = document.createElement('h3');
  h3.innerText = "Welcome to ABES ENGINEERING COLLEGE";
  h3.style.color = "yellow";
  h3.style.backgroundColor = "maroon";
  container[0].appendChild(h3);

  const img = document.createElement('img');
  img.src = 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg';
  img.setAttribute("height", "200px");
  img.setAttribute("width", "450px");
  console.log(img);
  container[0].appendChild(img);

  document.getElementById('disp').innerHTML = "";

  // console.log("Hi, i am working on MERN stack.");
  // alert("Hi, i am using DOM.")

}
button.addEventListener('click', msg);