import styles from "./SideImage.module.css";

function SideImage({ children }) {
  return (
    <div className={styles.divImage}>
      {children}
    </div>
  );
}


export default SideImage;
