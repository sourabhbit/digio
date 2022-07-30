import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="bodyWrapper" style={{ height: "90vh" }}>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
