import React, { useState } from "react";
import NavButton from "./NavButton";
import "./Navbar.css";
import { Links } from "./Links";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const toggleSubmenu = (index) => {
    if (openSubmenu === index) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(index);
    }
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 main_nav">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 mr-1 pt-2">
          Bobosoho Shop
        </div>
        <div
          onClick={toggleDropdown}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={link.name} className="md:ml-8 text-l md:my-0 my-7 cursor-pointer" onClick={() => toggleSubmenu(index)}>
              <div className="flex items-center justify-between w-full">
                <a href="/" className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                {link.submenu && (
                  <ion-icon
                    name={openSubmenu === index ? "chevron-up" : "chevron-down"}
                  ></ion-icon>
                )}
              </div>
              {link.submenu && (
                <div className="relative md:flex md:items-center">
                  {openSubmenu === index && (
                    <ul className="ml-4 submenu">
                      {link.submenu.map((submenuItem) => (
                        <li key={submenuItem.name}>
                          <a href="/"
                            className="text-gray-800 hover:text-gray-400 duration-500"
                          >
                            {submenuItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
          <NavButton>My Account</NavButton>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
