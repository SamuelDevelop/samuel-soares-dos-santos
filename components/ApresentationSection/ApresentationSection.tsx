import Image from "next/image";
import imagem from "../../assets/images/selfImage.jpg";
import styles from "./ApresentationSection.module.css"
import ApresentationOptions from "../ApresentationOptions/ApresentationOptions";

function ApresentationSection(){
    return (
        <section className={`bgDark ${styles.apresentationSection}`}>
            <Image
                src={imagem}    
                alt="minha foto"
                className={styles.selfImage}        
            />

            <div className={styles.about}>
                <h1>Samuel Soares</h1>
                <p>Samuel Soares Dos Santos</p>
            </div>
            
            <ApresentationOptions />
        </section>
    )
}

export default ApresentationSection;