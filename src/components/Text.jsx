import styles from "./Text.module.css";

function Text({ children }) {
  return (
    <div className={styles.divText}>
      {" "}
      {children}
    </div>
  );
}

export default Text;
