import React from "react";
import "./style.css";

const Dropdown = () => {
  return (
    <div className="select">
      <select>
        <option value="">Kolay</option>
        <option value="">Orta</option>
        <option value="">Zor</option>
      </select>
    </div>
  );
};

export default Dropdown;
