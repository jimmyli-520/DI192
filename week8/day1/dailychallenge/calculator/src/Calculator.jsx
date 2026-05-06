import { useState } from "react";

function Calculator() {
  const[var1,setVar1]=useState(0)
  const[var2,setVar2]=useState(0)
  const[result,setResult]=useState(0)
  const [operation, setOperation] = useState("add");

  const calculate = () => {
  const num1 = Number(var1);
  const num2 = Number(var2);
  
  if (operation === "add") setResult(num1 + num2);
  else if (operation === "subtract") setResult(num1 - num2);
  else if (operation === "multiply") setResult(num1 * num2);
  else if (operation === "divide") setResult(num2 !== 0 ? num1 / num2 : "Error");
};
  const handleAdd = () => {
    setResult(Number(var1) + Number(var2));
  };

  return (
    <div className="container">
      <div className="card">
        <h1 style={{ fontSize: '30px', color: '#e7804dff' }}>Adding Two Number</h1>
        
        <p className="result-text">{result}</p>

        <input 
          type="number" 
          className="input-field"
          placeholder="First number"
          value={var1}
          onChange={(e) => setVar1(e.target.value)}
        />
        
        <input 
          type="number" 
          className="input-field"
          placeholder="Second number"
          value={var2}
          onChange={(e) => setVar2(e.target.value)}
        />

        <select 
          className="input-field" 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (-)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
        </select>

        <button className="calc-button" onClick={calculate}>
          Calculator
        </button>
      </div>
    </div>
  );
}

export default Calculator;