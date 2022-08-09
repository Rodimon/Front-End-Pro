import './App.css';
import Header from "./components/Header.js";
import Left from "./components/Left.js";
import Content from "./components/Content";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header className="header" />
        <div className='flex'>
          <Left className="left" />
          <Content className="content" />
        </div>
      </div>
    )
  }
}

export default App;
