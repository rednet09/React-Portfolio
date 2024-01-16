import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between h-full">
      <div className="text-white">World Through my Code</div>
      <nav>
        <ul className="flex justify-between">
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
