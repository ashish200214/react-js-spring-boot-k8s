import axios from "axios";

function App() {

  const send = () => {
    axios.post("http://localhost:8080/test", {
      msg: "Hello from React"
    })
    .then(res => {
      alert(res.data);
    })
    .catch(err => {
      alert("Error");
      console.log(err);
    });
  };

  return (
    <div>
      <h2>React → Spring Boot Test</h2>
      <button onClick={send}>Send Request</button>
    </div>
  );
}

export default App;
