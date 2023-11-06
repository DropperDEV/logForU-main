import styles from "./Logo.module.css";
import logo from "../assets/logo.png";
import {  Link } from "react-router-dom";


export default function Logo() {
  return (
    <Link to="./" className={styles.link}>
        <div className={styles.logo_container} to="/">
          <img src={logo} alt="logo LOG FOR U" className={styles.logo} />
          <p className={styles.title}>LOG FOR U</p>
        </div>
      </Link>
  )
}
