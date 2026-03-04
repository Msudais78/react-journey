import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../utils/navItems";

function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-gray-600 hover:text-orange-500"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;