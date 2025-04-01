import { useState } from 'react';
import Opcoes from './Opcoes';
import Values from './Values';
import styles from './Dinheiro.module.css';

function Dinheiro({ selectOption }) {
    const [itensDrop, setItensDrop] = useState({
        nota: null,
        moeda: null,
        troco: null,
    });

    const [valoresNotas, setValoresNotas] = useState([]);
    const [somaTotal, setSomaTotal] = useState(0);

    const drop = (e, tipo) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const valorNota = getValorNota(id);

        if (id.startsWith('nota')) {
            setItensDrop((prev) => ({ ...prev, nota: tipo === 'entrada' ? id : null, troco: tipo === 'saida' ? id : null }));

            if (tipo === 'entrada' && valorNota !== null) {
                setValoresNotas((prev) => [...prev, valorNota]);
                setSomaTotal((prev) => prev + valorNota);
            }
        } else if (id.startsWith('moeda')) {
            setItensDrop((prev) => ({ ...prev, moeda: tipo === 'entrada' ? id : null }));
        }
    };

    const allowDrop = (e) => {
        e.preventDefault();
    };

    const getValorNota = (id) => {
        const valores = {
            nota1: 2,
            nota2: 5,
            nota3: 1,
        };
        return valores[id] || null;
    };

    const somaNotas = valoresNotas.reduce((acc, valor) => acc + valor, 0);

    const calcularTroco = () => {
        const valorProduto = selectOption;
        const troco = somaTotal - valorProduto;
        if (troco >= 0) {
            setItensDrop((prev) => ({ ...prev, troco: { id: `troco_${Date.now()}`, valor: troco } }));
            setSomaTotal(troco);
        } else {
            alert('Saldo insuficiente');
        }
    };

    const moverTrocoParaCarteira = () => {
        if (itensDrop.troco) {
            const troco = itensDrop.troco;
            setItensDrop((prev) => ({ ...prev, troco: null }));

            setSomaTotal(0);
        }
    };

    const renderizarTroco = () => {
        if (!itensDrop.troco) return null;

        const troco = itensDrop.troco.valor;

        if (troco === 0) {
            return null;
        }

        if (troco === 1) {
            return (
                <div className={styles.moeda}>
                    <div className={styles.furoMoeda} />
                    <div 
                        className={`${styles.moedaTroco} ${styles.trocoMoeda}`} 
                        onClick={moverTrocoParaCarteira} 
                    >
                        {`R$ ${troco.toFixed(2)}`}
                    </div>
                </div>
            );
        }

        return (
            <div className={styles.troco} onClick={moverTrocoParaCarteira}>
                {`R$ ${troco.toFixed(2)}`}
            </div>
        );
    };

    return (
        <main className={styles.containerDinheiro}>
            <div
                className={styles.dinheiroEntrada}
                onDrop={(e) => drop(e, 'entrada')}
                onDragOver={allowDrop}
            >
                <div className={styles.furoDinehiroEntrada}>
                    {itensDrop.nota && <div className="nota">{itensDrop.nota}</div>}
                </div>
            </div>
            <div
                className={styles.dinheiroSaida}
                onDrop={(e) => drop(e, 'saida')}
                onDragOver={allowDrop}
            >
                <div className={styles.furoDinheiroSaida}>
                    {renderizarTroco()}
                </div>    
            </div>
            <div
                className={styles.moeda}
                onDrop={(e) => drop(e, 'entrada')}
                onDragOver={allowDrop}
            >
                <div className={styles.furoMoeda} />
                {itensDrop.moeda && <div className="moeda">{itensDrop.moeda}</div>}
            </div>
            <Opcoes somaTotal={somaTotal} />
            <Values somaTotal={somaTotal} setItensDrop={setItensDrop} setSomaTotal={setSomaTotal} />
        </main>
    );
}

export default Dinheiro;
