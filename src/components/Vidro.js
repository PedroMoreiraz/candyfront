import styles from './Vidro.module.css';
import RetirarDoces from './RetirarDoces.js';
import  FiniMinhoca from './images/finiminhoca.jpg'

function Vidro({doceSelecionado}){

    return(
        <main className={styles.containerVidro}>
            <div className={styles.vidro}>
                <div className={styles.luz}/>
                <ul>
                    <div className={styles.shelf1}>
                        <p className={styles.doceA}>A</p>
                        <div className={styles.doces}>
                            {doceSelecionado === 'A' && (
                                <li id='candyA'>
                                    <img src={FiniMinhoca} alt='Fini minhoca' width={100} height={100}/>
                                </li>
                            )}
                        </div>
                    </div>
                    <div className={styles.shelf2}>
                        <p className={styles.doceB}>B</p>
                        <div className={styles.doces}>
                            {doceSelecionado === 'B' && (
                                <li id='candyB'>
                                    <img src={FiniMinhoca} alt='Fini minhoca' width={100} height={100}/>
                                </li>
                            )}
                        </div>
                    </div>
                    <div className={styles.shelf3}>
                        <p className={styles.doceC}>C</p>
                        <div className={styles.doces}>
                            {doceSelecionado === 'C' && (
                                <li id='candyC'>
                                    <img src={FiniMinhoca} alt='Fini minhoca' width={100} height={100}/>
                                </li>
                            )}
                        </div>
                    </div>
                </ul>
            </div>
            <RetirarDoces doceSelecionado={{doceSelecionado}}/>
        </main>
    )
}

export default Vidro;