import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./SocialMedias.module.css"

function SocialMedias(){
    return (
        <div className={styles.socialMedias}>
            <div className={styles.media}>
                <FaGithub />
            </div>
            <div className={styles.media}> 
                <FaLinkedin />
            </div>
            <div className={styles.media}>
                <FaInstagram />
            </div>
        </div>
    )
}

export default SocialMedias;