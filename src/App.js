import "./styles.css";

// Import Route and our components
import {Route, Switch} from "react-router-dom";
import Nav from "./components/Nav.js";
import About from "./pages/About.js"
import Home from "./pages/Home.js"

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
