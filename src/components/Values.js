import { FaLock, FaLockOpen } from "react-icons/fa";
import styles from './Values.module.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Values({ somaTotal, setItensDrop , setSomaTotal, setDoceSelecionado}) {

    const [selectOption, setSelectOption] = useState(null);

    const manipularOption = (valorOpcao) => {
        setSelectOption(valorOpcao);
    }

    const confirmar = () => {
        if (selectOption !== null) {
            const troco = somaTotal - selectOption;
            if (troco >= 0) {
                setItensDrop((prev) => ({ ...prev, troco: {id: `troco_${Date.now()}`, valor: troco} }));

                setSomaTotal(troco);

                let doceSelecionado = '';
                switch(selectOption){
                    case 6:
                        doceSelecionado = 'A'
                        break;
                    case 7:
                        doceSelecionado = 'B'
                        break;
                    case 8:
                        doceSelecionado = 'C'
                        break;  
                    default:
                        doceSelecionado = '';      
                }
                
                console.log("Doce selecionado: ", doceSelecionado)
                console.log('setDoceSelecionado é:', typeof setDoceSelecionado);

                setDoceSelecionado(doceSelecionado);

            } else {
                toast.error('Não tem troco',{
                    autoClose: 3000,
                });
            }
        } else {
            toast.error('Selecione uma opção',{
                autoClose: 3000,
            });
        };
    };

    return (
        <main className={styles.containerValues}>
            <ToastContainer />
            <div className={styles.opcoes}>
                {somaTotal >= 6 ? (
                    <div className={styles.options} onClick={() => manipularOption(6)}>
                        <label>A = R$6,00</label>
                        <input type='radio' id='optionA' name='opcao' checked={selectOption === 6} readOnly /><FaLockOpen />
                    </div>
                ) : (
                    <div className={styles.options}>
                        <label>A = R$6,00</label>
                        <input type='radio' id='optionA' disabled /><FaLock />
                    </div>
                )}
                {somaTotal >= 7 ? (
                    <div className={styles.options} onClick={() => manipularOption(7)}>
                        <label>B = R$7,00</label>
                        <input type='radio' id='optionB' name='opcao' checked={selectOption === 7} readOnly /><FaLockOpen />
                    </div>
                ) : (
                    <div className={styles.options}>
                        <label>B = R$7,00</label>
                        <input type='radio' id='optionB' disabled /><FaLock />
                    </div>
                )}
                {somaTotal >= 8 ? (
                    <div className={styles.options} onClick={() => manipularOption(8)}>
                        <label>C = R$8,00</label>
                        <input type='radio' id='optionC' name='opcao' checked={selectOption === 8} readOnly /><FaLockOpen />
                    </div>
                ) : (
                    <div className={styles.options}>
                        <label>C = R$8,00</label>
                        <input type='radio' id='optionC' disabled /><FaLock />
                    </div>
                )}
                <div>
                    <button onClick={confirmar} className={styles.btn}>Confirmar</button>
                </div>
            </div>
        </main>
    )
}

export default Values;
