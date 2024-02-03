import React from "react";
import "../Price/Price.css";
import Input from "../../../Input.js";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={49.99}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={89.99}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={149.99}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={529.99}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
