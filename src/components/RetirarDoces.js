import styles from './RetirarDoces.module.css';
import  FiniMinhoca from './images/finiminhoca.jpg'

function RetirarDoces({doceSelecionado}){
    return(
        <main className={styles.containerRetirarDoces}>
            <div className={styles.saidaItens}>
                <div className={styles.gate}>
                    {doceSelecionado && (
                        <div>
                            <img src={FiniMinhoca} alt='Fini minhoca' width={100} height={100}/>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default RetirarDoces;