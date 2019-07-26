import React from "react";
import List from "../LIST/List";
import Form from '../FORM/Form';
import Header from '../HEADER/header';
import "./App.css";

//functional component contains three components -Header,List,Form

const App = () => (
  <div className="container">
    <Header/>
    <List />
    <Form />
  </div>

);

export default App;