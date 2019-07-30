import React from "react";
import List from "../List/List";
import Form from "../Form/Form";
import Header from "../Header/header";
import "./App.css";

//functional component contains three components -Header,List,Form

const App = () => (
  <div className="container">
    <Header />
    <List />
    <Form />
  </div>
);

export default App;
