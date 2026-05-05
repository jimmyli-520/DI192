import { useState, useRef } from "react";

export function CharacterCounter() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(inputRef.current.value.length);
  };

  return (
  <div>
    <input ref={inputRef} onChange={handleChange} />
    <p>Character count: {count}</p>
  </div>
  );
}