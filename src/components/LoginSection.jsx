import styles from './LoginSection.module.css'

function LoginSection({children}) {
  return (
    <section className={styles.section}>
      {children}
    </section>
  )
}

export default LoginSection