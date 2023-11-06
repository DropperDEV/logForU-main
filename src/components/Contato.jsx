import styles from './Contato.module.css'

function Contato({children}){
    return(
        <div className={styles.divContato}>
            {children}
        </div>
    )
}

export default Contato;