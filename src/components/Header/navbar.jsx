import React from "react";

function Navbar() {
    return (
        <nav>
            <ul className="flex items-center gap-8">
                {["Home", "Menu", "Offers"].map((item) => (
                    <li key={item}>
                        <a 
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                            className="text-base font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;