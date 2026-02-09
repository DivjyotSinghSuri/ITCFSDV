// function sum(num1,num2){
//   return num1+num2;
// }
// module.exports = sum;

async function getServerData(){
 const serverData=  await fetch('https://fakestoreapi.com/Products')
}
module.exports=getServerData;