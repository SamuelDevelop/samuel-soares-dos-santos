 'use client'

import SocialMedias from "../SocialMedias/SocialMedias";
import styles from "./Footer.module.css"
import { useRevealOnView } from "../useRevealOnView";

function Footer(){
    const { ref, isVisible } = useRevealOnView({ threshold: 0.25 });

    return (
        <section className={`${styles.footerSection} ${isVisible ? styles.revealed : styles.hidden}`} ref={ref}>
            <footer className={styles.footer}>
                <SocialMedias/>

                <div className={styles.info}>
                    <a>SamuelDevelop</a>
                    <p>2026</p>
                </div>
                
            </footer>
        </section>
    )
    
}

export default Footer;