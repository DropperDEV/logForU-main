import styles from './RowContatos.module.css'

function RowContatos({children}){
    return(
        <div className={styles.divContatos}>
            {children}
        </div>
    )
}

export default RowContatos;