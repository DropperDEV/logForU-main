import styles from './SideText.module.css'

function SideText({children}){
    return (
        <div className={styles.divText}>
        {children}
      </div>
    )
}

export default SideText;