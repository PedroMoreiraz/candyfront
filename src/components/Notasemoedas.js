import styles from './Notasemoedas.module.css'

function Notasemoedas({id, conteudo, iniciarArrasto}) {
    return(
        <>
            <div draggable onDragStart={(e) => iniciarArrasto(e, id)} className={styles.Notas}>
                {conteudo}
            </div>
            {/* <div draggable onDragStart={(e) => iniciarArrasto(e, id={})} className={styles.Moedas}>
                {conteudo}
            </div> */}
        </>
    )        
}

export default Notasemoedas;