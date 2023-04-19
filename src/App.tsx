import ListGroup from "./components/ListGroup";

export const App = () => {
  let items = ["New York", "San Francisco", "Los Angeles", "Tokyo", "Sydney"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};
export default App;
