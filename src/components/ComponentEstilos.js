import styles from './ComponentEstilos.module.css'

function ComponentEstilos() {
    return(
        <div>
            <h3>Vamos estilizar a pág?</h3>
            <p className={styles.exemplo01}>Exemplo 01</p>
            <p className={styles.exemplo02}>Exemplo 02</p>
            <p className={styles.exemplo03}>Exemplo 03</p>
        </div>
    )
}

export default ComponentEstilos