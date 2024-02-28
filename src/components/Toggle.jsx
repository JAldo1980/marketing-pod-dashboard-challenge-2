import React, { useState, useEffect } from "react";

const Toggle = () => {
  const [toggleSwitch, setToggleSwitch] = useState(true);

  useEffect(() => {
    document.body.className = toggleSwitch ? "bg-white" : "bg-black text-white";
  }, [toggleSwitch]);

  function handleToggle() {
    setToggleSwitch((prevToggle) => !prevToggle);
  }

  return (
    <div>
      <div className={`cursor-pointer`} onClick={handleToggle}>
        {toggleSwitch ? "🌙" : "☀️"}
      </div>
    </div>
  );
};

export default Toggle;
