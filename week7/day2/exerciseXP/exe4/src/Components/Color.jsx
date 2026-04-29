import {useState, useEffect } from "react";

function Color () {
  const [favoriteColor, setColor] = useState("red");

  useEffect(()=>{
    alert("useEffect reached");
    setColor("yellow")
  })

  const changeColor = () =>{
    setColor("blue")
  }

  return (
    <>
      <h1>My Favorite Color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change Color</button>
    </>

  );
}

export default Color;