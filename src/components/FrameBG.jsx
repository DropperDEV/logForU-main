import styles from "./FrameBG.module.css";

function MainFullBG({children}) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}

export default MainFullBG;
