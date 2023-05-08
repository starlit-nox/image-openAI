import './App.css';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    let API_KEY = "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"
    let headers = {
      "Authorization": "Bearer " + API_KEY
    }
    let url = "https://api.openai.com/v1/images/generations"
    let body = {
      "prompt": "A cute baby sea otter",
      "n": 2,
      "size": "1024x1024"
    }

    let response = axios.post(url, body, { "headers": headers })

      .then(res => console.log(res))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-header-container">
          <h1>Create Cool Images!</h1>
        </div>
      </header>

      <main className="App-main">
        <h1>Type something in...</h1>
        <Form.Control style={{ maxWidth: "40%", marginTop: "5%" }}></Form.Control>
        <Button style={{ marginTop: "5%" }}>Create</Button>
      </main>
    </div>
  );
}
export default App;
