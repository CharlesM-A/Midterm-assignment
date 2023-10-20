import React, { useState } from "react";
import "./dropdown.css";
export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("Game Programming");
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <form>
      <label>
        Program:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="Game Programming">Game Programming</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Software Engineer">Software Engineer</option>
            <option value="Software Technician">oftware Technician</option>
            <option value="Health Informatics">Health Informatics</option>
        </select>
      </label>
      <p className="dropdown__selected">Selected option: {selectedOption}</p>
    </form>
  );
}
