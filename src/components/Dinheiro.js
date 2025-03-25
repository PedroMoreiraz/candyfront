import { useState } from 'react';
import Opcoes from './Opcoes';
import Values from './Values';
import styles from './Dinheiro.module.css';

function Dinheiro() {
    const [itensDrop, setItensDrop] = useState({
        nota: null,
        moeda: null,
        troco: null,
    });

    const [valoresNotas, setValoresNotas] = useState([]);

    const drop = (e, tipo) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const valorNota = getValorNota(id);

        if (id.startsWith('nota')) {
            setItensDrop((prev) => ({ ...prev, nota: tipo === 'entrada' ? id : null, troco: tipo === 'saida' ? id : null }));

            if (tipo === 'entrada' && valorNota !== null) {
                setValoresNotas((prev) => [...prev, valorNota]);
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
            moeda1: 1,
        };
        return valores[id] || null;
    };

    const somaNotas = valoresNotas.reduce((acc, valor) => acc + valor, 0);

    const calcularTroco = () => {
        const valorProduto = 7;
        const troco = somaNotas - valorProduto;
        if (troco >= 0) {
            setItensDrop((prev) => ({ ...prev, troco: `R$ ${troco.toFixed(2)}` }));
        } else {
            alert('saldo insuficiente');
        }
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
                    {itensDrop.troco &&
                        <div className={styles.troco} draggable onDragStart={(e) => e.dataTransfer.setData('text/plain', 'troco')}>
                            {itensDrop.troco}
                        </div>}
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
            <Opcoes somaTotal={somaNotas} />
            <Values somaTotal={somaNotas} setItensDrop={setItensDrop} />
        </main>
    );
}

export default Dinheiro;
