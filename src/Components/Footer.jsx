import React, { useContext } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import DarkLogo from "../assets/images/dark-logo.png";
import LightLogo from "../assets/images/light-logo.png";
import { ThemeContext } from "../context/ThemeContext";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`py-8 px-5 sm:px-10 md:20 lg:px-35  ${theme === "dark"
        ? "bg-bg-dark text-gray-400"
        : "bg-bg-light text-bg-dark"
        }`}
    >
      <div className="container">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Name */}
          <img
            className={`w-26 md:w-28 lg:w-32`}
            src={theme === "dark" ? DarkLogo : LightLogo}
            alt="Raza Shaikh"
          />

          {/* Quick Links */}
          <ul className="flex gap-6 text-sm">
            <li>
              <Link to="about" smooth={true} duration={500} className="hover:text-blue-400 transition cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="hover:text-blue-400 transition cursor-pointer">
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="hover:text-blue-400 transition cursor-pointer">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="hover:text-blue-400 transition cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 text-xl">
            <Link
              to="https://github.com/razashaikh99"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition cursor-pointer"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition cursor-pointer"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://www.fiverr.com/razashaikh22"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition cursor-pointer"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Raza Shaikh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
