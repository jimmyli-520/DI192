import UserCard from "./UseCard"

function App() {

  return (
    <>
      <section id="center">
        <UserCard name= "Bob" age={25} role="Admin" />
        <UserCard name="Carol" />
        <UserCard />

      </section>
    </>
  )
}

export default App
