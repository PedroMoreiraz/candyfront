import styles from './Machine.module.css';
import { useState } from 'react';
import Vidro from './Vidro.js';
import Opcoes from './Opcoes.js';
import Dinheiro from './Dinheiro.js';
import Carteira  from './Carteira.js';

function Machine() {

    const [doceSelecionado, setDoceSelecionado] = useState(null);
    console.log('setDoceSelecionado é:', typeof setDoceSelecionado);

return(
    <>
        <main className={styles.containerMaquina}>
            <article className={styles.fundoMaquina}>
                <section className={styles.leftSide}>
                    <Vidro doceSelecionado={doceSelecionado}/>
                </section>
                <section className={styles.rightSide}>
                    <Opcoes doceSelecionado={doceSelecionado} setDoceSelecionado={setDoceSelecionado}/>    
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