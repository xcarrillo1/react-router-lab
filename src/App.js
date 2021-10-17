import "./styles.css";

// Import Route and our components
import {Route, Switch} from "react-router-dom";
import Nav from "./components/Nav.js";



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>

      </Switch>
    </div>
  );
}

export default App;
