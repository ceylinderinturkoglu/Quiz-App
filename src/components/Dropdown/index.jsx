import React from "react";
import "./style.css";

const Dropdown = ({ onChange, defaultValue }) => {
  return (
    <select
      className="select common-style"
      onChange={onChange}
      defaultValue={defaultValue}
    >
      <option value="Kolay">Kolay</option>
      <option value="Orta">Orta</option>
      <option value="Zor">Zor</option>
    </select>
  );
};

export default Dropdown;
