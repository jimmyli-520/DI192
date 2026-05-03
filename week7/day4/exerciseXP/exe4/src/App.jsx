
import './App.css'

function App() {
  async function postData() {
    const response = await fetch("https://webhook.site/615c470c-f342-4abe-97be-b44c6d5c8815", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27
      })
    });
    console.log(response);
  }

  return (
    <div>
      <button onClick={postData}>Press me to post some data</button>
    </div>
  );
}

export default App;