import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Red Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Red Alert
      </Button>
    </>
  );
}

export default App;
