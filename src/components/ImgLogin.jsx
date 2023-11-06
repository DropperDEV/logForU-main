import styles from "./ImgLogin.module.css";
import login from "../assets/login.svg";
import { Link } from "react-router-dom";
function ImgLogin() {
  return (
    <Link to='/login'>
      {" "}
      <img className={styles.login} src={login} alt="" />
    </Link>
  );
}

export default ImgLogin;
