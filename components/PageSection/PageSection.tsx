import { ReactNode } from "react";
import styles from "./PageSection.module.css"
import Image, { StaticImageData } from "next/image";

type pageSectionProps = {
    children : ReactNode,
    colorClass : string,
    image: StaticImageData,
    toLeft: boolean
}

function PageSection({children, colorClass, image, toLeft} : pageSectionProps){
    
    return (
        <section className={
            `${styles.pageSection} ${colorClass} 
            ${toLeft ? styles.sectionRight : styles.sectionLeft}`
        }>
            <div 
                className={
                    `${styles.context}
                    ${toLeft ? styles.contextRight : styles.contextLeft}`
                }
            >
                {children}
            </div>

            <Image src={image} alt="imagem" className={styles.pageSectionImage}/>  
        </section>
    )
}

export default PageSection;