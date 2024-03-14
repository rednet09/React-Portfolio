import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Header = () => {
  return (
    <div className="text-slate-200 p-6">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Dhiraj Naik
      </h1>
      <h3 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
        Full Stack Web Developer | JavaScript Enthusiast | Problem Solver
      </h3>
      <p className="mt-4 max-w-xs leading-normal">
        I am a full stack web developer with experience in building websites,
        with 1.6 years of Professional experience using Technologies Such as
        React js for Frontend And Node Js for Backend.
      </p>
      <nav className="nav hidden lg:block">
        <ul className="mt-16 w-max">
          <li>
            <a className="group flex items-center py-3" href="#About">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                About
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3" href="#Expericence">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Experience
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3" href="#Projects">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Projects
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="">
        <ul className="ml-1 mt-8 flex items-center">
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-slate-200"
              href="https://github.com/rednet09"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <FaGithub color="white" size={30} />
            </a>{" "}
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-slate-200"
              href="https://www.linkedin.com/in/dhiraj-naik-923723129/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin size={30} />{" "}
            </a>{" "}
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-slate-200"
              href="https://www.instagram.com/worldthrougmycode/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <FaInstagram size={30} />{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
