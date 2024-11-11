import React from "react";
import "../../Products/Products.css";
import "./Filter.css";
import Input from "../../../Input.js";

function FilterCategory({ handleCategoryChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input
          handleChange={() => handleCategoryChange("all")}
          value="all"
          title="All"
          name="test"
        />
        <Input
          handleChange={(e) => handleCategoryChange("Camera")}
          value="Camera"
          title="Camera"
          name="test"
        />
        <Input
          handleChange={(e) => handleCategoryChange("Headphone")}
          value="Headphone"
          title="Headphone"
          name="test"
        />
        <Input
          handleChange={(e) => handleCategoryChange("Smart Watch")}
          value="Smart Watch"
          title="Smart Watch"
          name="test"
        />
        <Input
          handleChange={(e) => handleCategoryChange("Tablet")}
          value="Tablet"
          title="Tablet"
          name="test"
        />
        <Input
          handleChange={(e) => handleCategoryChange("Smartphone")}
          value="Smartphone"
          title="Smartphone"
          name="test"
        />
        <Input
          handleChange={(e) => handleCategoryChange("Computer")}
          value="Computer"
          title="Computer"
          name="test"
        />
      </div>
    </div>
  );
}

export default FilterCategory;
