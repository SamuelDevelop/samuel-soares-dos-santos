import TecnologiasProps from "@/types/typeTecnologias";
import Image from "next/image";
import styles from "./Technologies.module.css"

function Technologies({tecnologias, title} : TecnologiasProps){
    return(
        <section className={styles.tecnologias}>
            {
                title ? <h2>{title}</h2> : ""
            }
            <div className={styles.techImagesPart}>
                {
                    tecnologias.map((tecnologia) => (
                        <div className={styles.tecnologia}
                            key={tecnologia.getNome()} 
                        >
                            <Image 
                                className={styles.techImage}
                                src={tecnologia.getImagem()}
                                alt={tecnologia.getAlt()}
                                width={1000}
                                height={1000} 
                            />
                            <p>{tecnologia.getNome()}</p>
                        </div>
                        
                    ))
                }
            </div>
        </section>
    )
}

export default Technologies;