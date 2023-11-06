import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li className={styles.li}>Segunda a Sexta</li>
        <li className={styles.li}>Rua Dr. Xing Ling 33</li>
        <li className={styles.li}>logforu@logforu.com.br</li>
      </ul>
    </footer>
  );
}

export default Footer;
