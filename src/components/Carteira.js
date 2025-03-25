import { useState } from 'react';
import Notasemoedas from './Notasemoedas';
import styles from './Carteira.module.css';

function Carteira({ setItensDrop, itensDrop }) {

    const [aberto, fechado] = useState(false);

    const iniciarArrasto = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
    };

    const toggleCarteira = () => {
        fechado(!aberto);
    };

    const dropCarteira = (e) => {
        e.preventDefault();
        const troco = e.dataTransfer.getData('text/plain');
        if (troco === 'troco') {
            setItensDrop((prev) => ({ ...prev, troco: 'R$ 2,00' }))
        }
    };

    return (
        <main className={`${styles.containerCarteira} ${aberto ? styles.aberto : ''}`} onClick={toggleCarteira}>
            {aberto && (
                <div className={styles.conteudoCarteira}>
                    <Notasemoedas id="nota1" conteudo="R$ 2,00" iniciarArrasto={iniciarArrasto} />
                    <Notasemoedas id="nota2" conteudo="R$ 5,00" iniciarArrasto={iniciarArrasto} />
                    <Notasemoedas id="moeda1" conteudo="R$ 1,00" iniciarArrasto={iniciarArrasto} />
                </div>
            )}
            <div className={styles.areaTroco} onDrop={dropCarteira} onDragOver={(e) => e.preventDefault()}>
                <p>Arraste o troco para cá</p>
                {itensDrop && itensDrop.troco && (
                    <div className='troco'>{itensDrop.troco}</div>
                )}
            </div>
        </main>
    )
}

export default Carteira;
