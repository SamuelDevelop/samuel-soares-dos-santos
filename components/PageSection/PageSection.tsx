import { ReactNode } from "react";
import styles from "./PageSection.module.css"
import Image, { StaticImageData } from "next/image";

type pageSectionProps = {
    children : ReactNode,
    colorClass : string,
    toLeft: boolean
}

function PageSection({children, colorClass, toLeft} : pageSectionProps){
    
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
        </section>
    )
}

export default PageSection;