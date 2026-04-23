import TecnologiasProps from "@/types/typeTecnologias";
import Image from "next/image";
import styles from "./Technologies.module.css"

function Technologies({tecnologias} : TecnologiasProps){
    return(
        <section className={styles.tecnologias}>
            {
                tecnologias.map((tecnologia) => (
                    <div className={styles.tecnologia}>
                        <Image 
                            className={styles.techImage}
                            key={tecnologia.getNome()} 
                            src={tecnologia.getImagem()}
                            alt={tecnologia.getAlt()}
                            width={1000}
                            height={1000} 
                        />
                        <p>{tecnologia.getNome()}</p>
                    </div>
                    
                ))
            }
        </section>
    )
}

export default Technologies;