import "./App.css";
import { Row, Divider } from "antd";

import FoodList from "./components/FoodList";

function App() {
  return (
    <div className="App">
      {/* Display Search component here */}
      <Divider>Food List</Divider>

      <FoodList />
    </div>
  );
}
export default App;
