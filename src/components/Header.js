import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between h-full">
      <div class="group relative w-full">
        <p class="text-lg absolute top-0 left-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
          World Through my Code
        </p>
        <p class="text-lg absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          Dhiraj Naik
        </p>
      </div>

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
