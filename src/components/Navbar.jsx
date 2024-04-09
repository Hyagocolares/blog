// src/components/Navbar.jsx

import "./css/navbar.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/blog/">Home</a></li>
        <li><a href="/blog/contact">Contato</a></li>
        <li><a href="/blog/about">Sobre</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
