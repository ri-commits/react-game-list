import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

export const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Allert</Alert>
      )}
      <Button color="warning" onClick={() => setAlertVisibility(true)}>
        Richard's Button
      </Button>
    </div>
  );
};
export default App;
