import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import AddProject from "./Components/AddProject";
import EditProject from "./Components/EditProject";

const App = () => {
  const handleClick = () => {
    alert("hi");
  };
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
          {/* component={()=><Home/>}  */}
        </Route>
        <Route path="/add">
          <AddProject />
        </Route>
        <Route path="/edit/:id">
          <EditProject />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
