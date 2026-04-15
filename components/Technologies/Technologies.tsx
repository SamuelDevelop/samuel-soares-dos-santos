import TecnologiasProps from "@/types/typeTecnologias";
import Image from "next/image";
import styles from "./Technologies.module.css"

function Technologies({tecnologias} : TecnologiasProps){
    return(
        <section className={styles.tecnologias}>
            {
                tecnologias.map((tecnologia) => (
                    <Image 
                        className={styles.techImage}
                        key={tecnologia.getImagem().src} 
                        src={tecnologia.getImagem()}
                        alt={tecnologia.getAlt()}
                    />
                ))
            }
        </section>
    )
}

export default Technologies;