import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>

          <Route path="/" component={Home}>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}
export default App;
