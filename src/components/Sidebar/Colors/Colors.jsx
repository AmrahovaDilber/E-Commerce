import React from "react";
import "../Colors/Colors.css";
import Input from "../../../Input.js";

const Colors = ({ handleColorChange }) => (
  <div>
    <h2 className="sidebar-title">Colors</h2>
    <Input
      handleChange={() => handleColorChange("black")}
      title="Black"
      value="black"
      name="test1"
      color="black"
    />
    <Input
      handleChange={() => handleColorChange("blue")}
      title="Blue"
      value="blue"
      name="test1"
      color="blue"
    />
    <Input
      handleChange={() => handleColorChange("red")}
      title="Red"
      value="red"
      name="test1"
      color="red"
    />
    <Input
      handleChange={() => handleColorChange("green")}
      value="green"
      title="Green"
      name="test1"
      color="green"
    />
    <Input
      handleChange={() => handleColorChange("white")}
      value="white"
      name="test1"
      color="white"
    />
  </div>
);

export default Colors;
