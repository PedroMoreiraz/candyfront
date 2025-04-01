import styles from './RetirarDoces.module.css';
import  FiniMinhoca from './images/finiminhoca.png'
import  FiniBanana from './images/finibanana.png'
import  FiniBeijos from './images/finibeijos.png'

function RetirarDoces({doceSelecionado}){

    let doceImagem = null;

    switch (doceSelecionado) {
        case 'A':
            doceImagem = FiniMinhoca;
            break;
        case 'B':
            doceImagem = FiniBanana;
            break;
        case 'C':
            doceImagem = FiniBeijos;
            break;
        default:
            doceImagem = null;
    }

    return(
        <main className={styles.containerRetirarDoces}>
            <div className={styles.saidaItens}>
                <div className={styles.gate}>
                    {doceSelecionado && (
                        <div>
                            <img src={doceImagem} alt={`${doceSelecionado}`} width={100} height={100}/>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default RetirarDoces;