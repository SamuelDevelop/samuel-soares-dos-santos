import SocialMedias from "../SocialMedias/SocialMedias";
import styles from "./Footer.module.css"

type props = {
    bgColor : string
}

function Footer({bgColor} : props){
    return (
        <section className={`${styles.footerSection} ${bgColor}`}>
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