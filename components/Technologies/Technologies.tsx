import TecnologiasProps from "@/types/typeTecnologias";
import Image from "next/image";
import styles from "./Technologies.module.css"

function Technologies({tecnologias, title} : TecnologiasProps){
    const repeatedTechnologies = [...tecnologias, ...tecnologias];

    return(
        <section className={styles.tecnologias}>
            {
                title ? <h2>{title}</h2> : ""
            }
            <div className={styles.marqueeViewport}>
                <div className={styles.techImagesPart}>
                    {
                        repeatedTechnologies.map((tecnologia, index) => (
                            <div
                                className={styles.tecnologia}
                                key={`${tecnologia.getNome()}-${index}`}
                                aria-hidden={index >= tecnologias.length}
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
            </div>
        </section>
    )
}

export default Technologies;