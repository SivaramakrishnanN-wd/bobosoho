// SubMenu.js
import React from "react";

const SubMenu = ({ items, closeSubMenu, visible }) => {
  const subMenuClass = visible ? "fixed top-0 left-0 w-full h-full bg-white md:w-1/4 lg:w-1/5" : "hidden";

  return (
    <div className={subMenuClass}>
      <div className="md:flex items-center justify-center h-full">
        <ul>
          {items.map((item) => (
            <li key={item.name} className="my-4">
              <a
                href={item.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={closeSubMenu}>Close SubMenu</button>
      </div>
    </div>
  );
};

export default SubMenu;
