import './assets/index.css'; // Import your CSS file
import React, { useState } from 'react'; // Import React and useState

const App = () => {
  const [isActive, setIsActive] = useState(false); // Use state to manage class toggle

  const handleMenuClick = () => {
    setIsActive(!isActive); // Toggle isActive state
  };

  return (
    <div>
      <p>Click on the Menu Icon to Change Button</p>
      <div className={`toggle-icon ${isActive ? 'change' : ''}`} onClick={handleMenuClick}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default App;
