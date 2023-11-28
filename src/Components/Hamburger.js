import { slide as Menu } from "react-burger-menu";
import "./Styles/Hamburger.css";
import styles from "../styles.module.css";
import "../index.css";
import { Link } from "react-router-dom";

const Hamburger = () => (
  <div className={styles.hamburger}>
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className={styles.hamburgerPosition}>
      <div className="bm-item-list">
        <ul class="tree">
          <li class="section">
          <input type="checkbox" id="aboutUs" />
          <label for="aboutUs">O nas</label>
            <ul>
              <li><Link to="/about">Iskierka</Link></li>
              <li><Link to="/history">Historia</Link></li>
              <li><Link to="/management">Władze</Link></li>
              <li><Link to="/finances">Sprawozdania finansowe i statut</Link></li>
            </ul>
          </li>
          <li><Link to="/parents">Dla rodziców</Link></li>
          <li><Link to="/actions">Działania</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </div>
      
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div>
    <svg
      className={styles.iconStyle}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

const Header = () => {
  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerSubNav}>
        <Hamburger />
      </div>
      <div></div>
    </nav>
  );
};

export default Header;