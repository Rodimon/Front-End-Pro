import './App.css';
import Todo from "./components/Todo.js";
import React, { useState, useEffect } from "react";
import Start from './components/Start';
function App() {
  return (
    <div className="App">
      <Start />
      <Todo>
      </Todo>
    </div >
  )
}

export default App;
