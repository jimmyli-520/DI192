import {useState} from "react";
import QuoteGenerator from "./QuoteGenerator"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <QuoteGenerator />
      </section>
    </>
  )
}

export default App
