import React from "react";
import { Link, useLocation } from "react-router-dom";
import mclarenLogo from "../../assets/mclaren-logo.png-removebg-preview (1).png"; // Adjust path if needed

const NavBar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/listing" },
    { name: "Order", path: "/order" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-0 shadow-none border-none">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo Image */}
        <div className="flex items-center space-x-3">
          <img
            src={mclarenLogo}
            alt="McLaren Logo"
            className="w-36 h-auto object-contain brightness-0 invert hover:brightness-100 transition duration-300"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-wide transition duration-300 text-gray-200 hover:text-yellow-400`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
