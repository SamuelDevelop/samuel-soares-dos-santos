'use client'
import { useRouter } from "next/navigation";
import { FaFolderOpen, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import styles from "./ApresentationOptions.module.css"

function ApresentationOptions(){
    const router = useRouter();

    return (
        <div className={styles.apresentationOptions}>
            <div className={styles.optionGroup}
                onClick={() => router.push("/sobre")}
            >
                <FaUserAlt className={styles.option}/>
                <p>Sobre</p>
            </div>
            <div className={styles.optionGroup}
                onClick={() => router.push("/projetos")}
            >
                <FaFolderOpen className={styles.option}/>
                <p>Projetos</p>
            </div>
            <div className={styles.optionGroup}
                onClick={() => router.push("/skills")}
            >
                <FaPaintbrush className={styles.option}/>
                <p>Skills</p>
            </div>
            <div className={styles.optionGroup}
                onClick={() => router.push("/curriculo")}
            >
                <IoDocumentText className={styles.option}/>
                <p>Curriculo</p>
            </div>
            <div className={styles.optionGroup}
                onClick={() => router.push("/contato")}
            >
                <FaPhoneAlt className={styles.option}/>
                <p>Contato</p>
            </div>
        </div>
    )
}

export default ApresentationOptions;