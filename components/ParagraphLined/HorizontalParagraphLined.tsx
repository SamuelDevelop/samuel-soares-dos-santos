import { ReactNode } from "react";
import styles from "./ParagraphLined.module.css"

type Props = {
  children: React.ReactNode
}

function HorizontalParagraphLined({ children }: Props){
    return (
        <div className={styles.horizontalParagraphLined}>
            {children}
        </div>
    )
}

export default HorizontalParagraphLined;