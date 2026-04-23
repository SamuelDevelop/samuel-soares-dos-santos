import Image, { StaticImageData } from "next/image";
import styles from "./ImageSection.module.css"

type props = {
    image: StaticImageData,
    bgColor: string,
    alt: string
    positon: "Center" | "Left" | "Right"
}

function ImageSection({image, bgColor, alt, positon}: props){
    return (
        <section className={`
            ${styles.imageSection} ${bgColor}
            ${
                positon == "Center" ? styles.center : ""
            }
            ${
                positon == "Left" ? styles.left : ""
            }
            ${
                positon == "Right" ? styles.right : ""
            }
        `}>
            <Image
                className={styles.image}
                src={image}
                alt={alt}   
                width={1000}
                height={1000}         
            />
        </section>
    )
}

export default ImageSection;