import styles from './Opcoes.module.css';
import Values from './Values';

function Opcoes({somaTotal, doceSelecionado, setDoceSelecionado}){

    console.log('doce é', typeof setDoceSelecionado)

    return(
        <main className={styles.containerOpcoes}>
            <div className={styles.visor}>
                {somaTotal === 0 ? (
                    <div className={styles.textValues}>
                        <p>Insira um valor</p>
                    </div>
                ) : (
                    <div id="values" className={styles.values}>
                        <h3>R$ {somaTotal}</h3>
                    </div>    
                )}
            </div>
            <Values doceSelecionado={doceSelecionado} setDoceSelecionado={setDoceSelecionado}/>
        </main>
    )
}

export default Opcoes;