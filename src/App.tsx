import { useState } from "react";
import Alert from "./components/MyAllert/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsCalendar2DateFill } from "react-icons/bs";
import Like from "./components/like/Like";
import Message from "./Message";

export const App = () => {
  let items = ["New York", "San Francisco", "Tokyo", "Seul"];
  const [alertVisible, setAlertVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const handleSelectItem = (item: string) => {
    console.log(item);
    console.log(alertVisible);
  };

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      <div>
        {drink.price}
        <button onClick={handleClick}>Click Me</button>
      </div>
      <Message />
      <Like onClick={() => console.log("clicked")} />
      <BsCalendar2DateFill color="red" size="40" />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Allert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Richard's Button
      </Button>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};
export default App;
