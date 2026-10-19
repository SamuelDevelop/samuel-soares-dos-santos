 'use client'

import { ReactNode } from "react";
import styles from "./PageSection.module.css"
import { useRevealOnView } from "../useRevealOnView";

type pageSectionProps = {
    children : ReactNode,
    toLeft: boolean,
    centered?: boolean
}

function PageSection({children, toLeft, centered = false} : pageSectionProps){
    const { ref, isVisible } = useRevealOnView();

    const sectionOrientation = centered
        ? styles.sectionCenter
        : toLeft
            ? styles.sectionRight
            : styles.sectionLeft;

    const contextOrientation = centered
        ? styles.contextCenter
        : toLeft
            ? styles.contextRight
            : styles.contextLeft;
    
    return (
        <section className={
            `${styles.pageSection} ${isVisible ? styles.revealed : styles.hidden} ${sectionOrientation}`
        } ref={ref}>
            <div 
                className={
                    `${styles.context} ${contextOrientation}`
                }
            >
                {children}
            </div>  
        </section>
    )
}

export default PageSection;