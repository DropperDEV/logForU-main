import styles from './Sidebar.module.css'
function Sidebar() {
  return (
    <sidebar className={styles.sidebar}>
      <div className={styles.wrapTitle}>
        <h2 className={styles.title}>BEM-VINDO NOVAMENTE!</h2>
        <p className={styles.disclaimer}>Acesse sua conta por meio de seu email e senha.</p>
      </div>

      <div className={styles.btnDiv}>
        <button className={styles.btnDark}>ENTRAR</button>
        <button className={styles.btnWhite}>Home</button>
      </div>
    </sidebar>
  );
}

export default Sidebar;
