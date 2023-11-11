
import React from 'react';
import { Link } from 'react-router-dom';
import { Links } from '../../Navigation/Links';

const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <ul className="flex justify-center space-x-4">
        {Links.map((link) => (
          <li key={link.name}>
            <Link to={link.link} className="hover:text-gray-400 duration-500">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>&copy; 2023 Bobosoho Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
