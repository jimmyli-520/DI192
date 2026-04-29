import {useState} from "react";
const Events = ()=>{
  const clickMe =()=>{
    alert('I was clicked')
  };

  const handleKeyDown = (event) =>{
    if (event.key ==='Enter') {
      alert("The Enter key was pressed,your input is: " + event.target.value);
    }
  };
 
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleToggle = () =>{
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick = {clickMe}>Click</button>
      <input
        placeholder="Press the Enter Key!"
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleToggle}>
        {isToggleOn? "ON" : "OFF"}
      </button>
    </div>
    
  )
};

export default Events