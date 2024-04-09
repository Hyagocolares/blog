// src/components/Navbar.jsx
import "./css/navbar.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contato</a></li>
        <li><a href="/about">Sobre</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
