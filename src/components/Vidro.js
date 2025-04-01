import styles from './Vidro.module.css';
import RetirarDoces from './RetirarDoces.js';
import FiniMinhoca from './images/finiminhoca.png'
import FiniBanana from './images/finibanana.png'
import FiniBeijos from './images/finibeijos.png'

function Vidro({ doceSelecionado }) {

    const getClassName = (doce) => {
        return doceSelecionado === doce ? `${styles.doces} ${styles.docesAnimado}` : styles.doces;
    };

    return (
        <main className={styles.containerVidro}>
            <div className={styles.vidro}>
                <div className={styles.luz} />
                <ul>
                    <div className={styles.shelf1}>
                        <p className={styles.doceA}>A</p>
                        <div className={styles.doces}>
                            <li id='candyA' className={getClassName('A')}>
                                <div className={styles.fini1}>
                                    <img src={FiniMinhoca} alt='Fini minhoca' width={100} height={100} />
                                </div>
                            </li>
                        </div>
                    </div>
                    <div className={styles.shelf2}>
                        <p className={styles.doceB}>B</p>
                        <div className={styles.doces}>
                            <li id='candyB' className={getClassName('B')}>
                                <div className={styles.fini2}>
                                    <img src={FiniBanana} alt='Fini banana' width={100} height={100} />
                                </div>
                            </li>
                        </div>
                    </div>
                    <div className={styles.shelf3}>
                        <p className={styles.doceC}>C</p>
                        <div className={styles.doces}>
                            <li id='candyC' className={getClassName('C')}>
                                <div className={styles.fini3}>
                                    <img src={FiniBeijos} alt='Fini beijos' width={100} height={100} />
                                </div>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
            <RetirarDoces doceSelecionado={doceSelecionado} />
        </main>
    );
}

export default Vidro;
