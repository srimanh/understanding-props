import React, { Component } from "react";
import "./App.css";
import image from "./images/elephant.jpeg";

class AppClass extends Component {
  render() {
    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <div className="container">
          <img src={image} />
          <img src={image} />
          <img src={image} />
          <img src={image} />
        </div>
      </div>
    );
  }
}

export default AppClass;