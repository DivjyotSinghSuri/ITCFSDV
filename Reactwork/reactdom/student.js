const parent=document.getElementById('container');
console.log(parent);
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{style:{backgroundColor: 'brown', color: 'maroon'}})
const myName=<h3 style={{color: "brown"}}>Name: Divjyot</h3>;
root.render(myName);

const newer = document.getElementById('card');
console.log(newer);
const root1=ReactDOM.createRoot(newer);
const name=<h4>Name: Divjyot Singh Suri</h4>;
