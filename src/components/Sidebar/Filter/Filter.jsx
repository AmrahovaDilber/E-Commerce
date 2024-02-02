import React from "react";
import "../../Products/Products.css";
import "../Filter/Filter.css";
import Input from '../../../Input.js'
function Category({ handleChange }) {
  return (
    <div >

     <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Camera"
          title="Camera"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Headphone"
          title="Headphone"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Smart Watch"
          title="Smart Watch"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Tablet"
          title="Tablet"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Smartphone"
          title="Smartphone"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Computer"
          title="Computer"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;