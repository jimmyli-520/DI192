import {useState} from "react";
import Garage from './Garage';

function Car({ carInfo }) {
   const [color, setColor] = useState("red");
   return (
        <>
        <Garage size = "small" />
        <h1>This car is {color} {carInfo.model}</h1>
        
        </>
  );
}

export default Car;