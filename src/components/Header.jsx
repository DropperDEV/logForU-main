import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import ImgLogin from "./ImgLogin";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapLogin}>
        <ImgLogin />
        <Logo />
      </div>

      <nav>
        <ul className={styles.ul}>
          <NavLink to="/contrate-nos">Contrate-nós</NavLink>
          <NavLink to="/quem-somos">Quem Somos</NavLink>
          <NavLink to="/trabalhe-conosco">Trabalhe conosco</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
