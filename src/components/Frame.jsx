import styles from "./Frame.module.css";

function Frame({children}) {
  return (
    <main className={styles.main}>
      {children}
      
    </main>
  );
}

export default Frame;
