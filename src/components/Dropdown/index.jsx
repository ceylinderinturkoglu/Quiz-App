import React from "react";
import "./style.css";

const Dropdown = ({ onChange, defaultValue }) => {
  return (
    <div className="select">
      <select onChange={onChange} defaultValue={defaultValue}>
        <option value="Kolay">Kolay</option>
        <option value="Orta">Orta</option>
        <option value="Zor">Zor</option>
      </select>
    </div>
  );
};

export default Dropdown;
