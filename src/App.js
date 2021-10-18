import "./styles.css";

// Import Route and our components
import {Route, Switch} from "react-router-dom";
import Nav from "./components/Nav.js";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import Stock from "./pages/Stock.js";
import stocks from "./data.json";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route
        path="/stocks/:symbol"
        render={(routerProps) => <Stock stocks={stocks} {...routerProps} /> }
        />
        <Route exact path="/">
            <Home />
        </Route>
        <Route path='/stocks'>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
