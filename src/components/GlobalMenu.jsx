import { useState } from 'react';
import styles from '../styles/GlobalMenu.module.css';

function GlobalMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.globalMenu}>
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="#d81b60"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>
        <span className={styles.menuText}>Menu</span>
      </div>

      <ul className={`${styles.menuItems} ${isMenuOpen && styles.menuOpen}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/novidades">Novidades</a></li>
        <li><a href="/contato">Contato</a></li>
        <li><a href="/carrinho">Carrinho</a></li>
      </ul>
    </nav>
  );
}

export default GlobalMenu;