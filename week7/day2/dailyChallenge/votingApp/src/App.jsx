import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const vote = (name) => {
    setLanguages(languages.map((language) => {
      if (language.name === name) {
        return { ...language, votes: language.votes + 1 };
      }
      return language;
    }));
  };

  return (
    <>
      <h1>Vote Your Language!</h1>
      {languages.map((language) => (
        <div key={language.name}>
          <span>{language.votes}</span>
          <span>{language.name}</span>
          <button onClick={() => vote(language.name)}>Click Here</button>
        </div>
      ))}
    </>
  )
}

export default App