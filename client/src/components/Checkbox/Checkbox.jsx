import { useState } from "react";
import "./checkbox.css";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    
  };

  return (
    <form>
      <label htmlFor="color" className="checkbox__text">
        <input
          className="checkbox__input"
          type="checkbox"
          name="color"
          checked={isChecked == true}
          onChange={handleChange}
          
        />
        High School 10 grade
        {isChecked && <div>High School 10 grade is selected!</div>}
        <input
          className="checkbox__input"
          type="checkbox"
          name="color"
          checked={isChecked}
          onChange={handleChange}
          
        />
        High School 12 grade
        
      </label>

      {isChecked && <div>High School 12 grade selected!</div>}
   
    </form>
  );
  
  
}

export default Checkbox;
