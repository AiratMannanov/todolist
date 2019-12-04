import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDolist from "./ToDoList";

let destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <ToDolist />
  </div>,
  destination
);
