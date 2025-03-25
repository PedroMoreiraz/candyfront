 import styles from './Machine.module.css';
 import {} from 'react-icons/fa';
import Vidro from './Vidro.js';
import Opcoes from './Opcoes.js';
import Dinheiro from './Dinheiro.js';
import Carteira  from './Carteira.js';

function Machine() {
return(
    <>
        <main className={styles.containerMaquina}>
            <article className={styles.fundoMaquina}>
                <section className={styles.leftSide}>
                    <Vidro/>
                </section>
                <section className={styles.rightSide}>
                    <Opcoes/>    
                    <Dinheiro/>   
                </section>
            </article>
            <article>
                <Carteira/>
            </article>
        </main>
    </>
)
}

export default Machine;