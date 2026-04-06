'use client'
import Image from "next/image";
import imagem from "../../assets/images/selfImage.jpg";
import styles from "./ApresentationSection.module.css"
import ApresentationOptions from "../ApresentationOptions/ApresentationOptions";

import { useRouter } from "next/navigation";

function ApresentationSection(){
    const router = useRouter();
    
    return (
        <section className={`bgDark ${styles.apresentationSection}`}>
            <Image
                src={imagem}    
                alt="minha foto"
                className={styles.selfImage}
                onClick={() => router.push("/stories")}        
            />

            <div className={styles.about}>
                <h1>Samuel Soares</h1>
                <p>Estudando: FullStack Developer</p>
            </div>
            
            <ApresentationOptions />
        </section>
    )
}

export default ApresentationSection;