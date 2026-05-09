import  {useState } from 'react';

function Counter() {
  const[count, setCount] = useState<number>(0);
  const[lastAction, setLastAction]= useState<string>('None');

  function increment() {
    setCount(count + 1);
    setLastAction ('incremented')
  }

  function decrement () {
    setCount(count - 1);
    setLastAction('decremented')
  }

  return (
    <div>
      <h2>Counter:{count}</h2>
      <p>Last Action: {lastAction}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;
