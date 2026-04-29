import './App.css'
import {useState} from"react"


function App() {

const [a, b] =useState(11);
console.log("a=>", a);
console.log("b=>", b);

let x = 10;

const add = () => {
  x++;
  console.log("x=>", x);
};

return (
<div>
  <h2>X={x}</h2>
  <button onClick={()=> add()}></button>
</div>
);
}

export default App
